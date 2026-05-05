# My First Ownable

This guide walks through creating your first custom Ownable package based on `ownables/basic`.

## Prerequisites

- The [SDK](sdk.md) is already set up in `ownables-sdk`
- Dependencies are installed with `yarn install`
- Rust toolchain setup is completed with `yarn rustup`

## 1. Copy, Build, and Issue the package

Copy the starter Ownable:

```bash
yarn ownables:copy basic my-first
```

Build the Ownable package:

```bash
yarn ownables:build my-first
```

Then open the Ownables SDK wallet and issue it:

1. Click **Issue an Ownable**
2. Click **Upload package**
3. Select `ownables/my-first.zip`
4. Select **My first** from the available packages

## 2. Customize the widget

Edit `ownables/my-first/Cargo.toml` again and bump:

```toml
description = "Happiness cannot be traveled to, owned, earned, worn or consumed. Happiness is the experience of living every minute with love, grace, and gratitude."
version = "0.1.1"
```

Then replace `ownables/my-first/assets/index.html` with:

```html
<!--<!DOCTYPE html>-->
<html>
<head>
  <style>
    html, body { margin: 0; height: 100%; }
    body { width: 100%; height: 100%; overflow: hidden; }
    div { text-align: center; line-height: 100vh; font-size: 30vh; }
    
    div:hover .off { display: none; }
    div:not(:hover) .on { display: none; }
  </style>
</head>
<body>
  <div>
    <span class="off">🙂</span>
    <span class="on">😀</span>
  </div>
</body>
</html>
```

Rebuild after this change:

```bash
yarn ownables:build my-first
```

In the SDK wallet import `my-first.zip` again. After the import, the version number should be `v0.1.1`. 

## 3. Interactive widget

Edit `ownables/my-first/Cargo.toml` again and bump:

```toml
version = "0.1.2"
```

Then replace `ownables/my-first/assets/index.html` again with:

```html
<html>
<head>
  <style>
    html, body { margin: 0; height: 100%; }
    body { width: 100%; height: 100%; overflow: hidden; display: flex; align-items: center; justify-content: center; font-family: sans-serif; }

    .container { text-align: center; }
    .emoji { font-size: 30vh; line-height: 1; margin-bottom: 3vh; }
    .controls { display: flex; justify-content: center; gap: 1rem; }

    button { width: 100%; font-size: 2rem; padding: 0.4rem 0.8rem; border: 1px solid #d1d5db; border-radius: 0.6rem; background: #fff; cursor: pointer; }
    button:active { transform: translateY(1px); }
  </style>
</head>
<body>
  <div class="container">
    <div id="emoji" class="emoji"></div>
    <div class="controls">
      <button id="cloud" aria-label="Sadder">☁️</button>
      <button id="sun" aria-label="Happier">☀️</button>
    </div>
  </div>

  <script>
    const moods = ["😭", "☹️", "😐", "🙂", "😄"];
    let moodIndex = 2;

    const emojiEl = document.getElementById("emoji");
    const cloudBtn = document.getElementById("cloud");
    const sunBtn = document.getElementById("sun");

    const renderMood = () => {
      emojiEl.textContent = moods[moodIndex];
    };

    cloudBtn.addEventListener("click", () => {
      moodIndex = Math.max(0, moodIndex - 1);
      renderMood();
    });

    sunBtn.addEventListener("click", () => {
      moodIndex = Math.min(moods.length - 1, moodIndex + 1);
      renderMood();
    });

    renderMood();
  </script>
</body>
</html>
```

Rebuild after this change:

```bash
yarn ownables:build my-first
```

In the SDK wallet import `my-first.zip` again. After the import, the version number should be `v0.1.2`. 

## 4. Persist happiness with events and widget state

Right now, happiness is only a JavaScript variable (`moodIndex`) in the widget. It is **not** stored on-chain in the Ownable state. That means after a refresh (or reopening the ownable), mood resets to the default.

To persist it:

- add execute events that mutate contract state
- store mood in `Config`
- return mood from `GetWidgetState`
- make widget buttons send execute messages instead of only changing local DOM state

### 4.1 Bump version

Edit `ownables/my-first/Cargo.toml`:

```toml
version = "0.1.3"
```

### 4.2 Update widget to send execute events

In `ownables/my-first/assets/index.html`, stop mutating `moodIndex` directly in click handlers. Instead, send execute messages:

```js
let ownable_id;
const moods = ["😭", "☹️", "😐", "🙂", "😄"];

const emojiEl = document.getElementById("emoji");
const cloudBtn = document.getElementById("cloud");
const sunBtn = document.getElementById("sun");

const renderMood = (moodIndex) => {
  emojiEl.textContent = moods[moodIndex] ?? '';
};

cloudBtn.addEventListener("click", () => {
  window.parent.postMessage({type: "execute", ownable_id, msg: { "decrement": {} }}, "*");
});

sunBtn.addEventListener("click", () => {
  window.parent.postMessage({type: "execute", ownable_id, msg: { "increment": {} }}, "*");
});

window.addEventListener("message", (event) => {
  ownable_id = event.data.ownable_id;
  const moodIndex = event.data?.state?.mood ?? 2;
  renderMood(moodIndex);
});
```

### 4.3 Add mood to contract state

Edit `ownables/my-first/src/state.rs`. We want to persist `mood` as number (0 to 4). We do that by adding it to the `Config`. 

```rust
pub struct Config {
    pub mood: i8,
}
```

### 4.4 Add execute messages for mood updates

Edit `ownables/my-first/src/msg.rs` to add 2 execute messages.

```rust
pub enum ExecuteMsg {
    Increment {},
    Decrement {},
}
```

The increment and decrement messages don't have any properties.

### 4.5 Mutate and expose mood in the contract

Edit `ownables/my-first/src/contract.rs`:

1. In `instantiate`, initialize config with the middle mood.

```rust
CONFIG.save(deps.storage, &Config { mood: 2 })?;
```

2. In `execute`, handle new events.

```rust
match msg {
    ExecuteMsg::Transfer { to } => try_transfer(info, deps, to),
    ExecuteMsg::Increment {} => try_update_mood(info, deps, 1),
    ExecuteMsg::Decrement {} => try_update_mood(info, deps, -1),
}
```

The `execute` function should have minimum logic and always call internal helper functions.

3. Add helpers functions.

Edit `ownables/my-first/src/contract.rs` again. Import the function `ensure_owner` from the `ownable_std`. With this function we ensure that the message is signed by the current owner.

```rust
use ownable_std::{package_title_from_name, ExternalEventMsg, InfoResponse, Metadata, OwnableInfo, ensure_owner};
```

Calling `ensure_owner` is almost always be the first step of an execute method. Next we update the config with the new mood value (clamping to min/max).

```rust
fn try_update_mood(info: MessageInfo, deps: DepsMut, delta: i8) -> Result<Response, ContractError> {
    let ownership = OWNABLE_INFO.load(deps.storage)?;
    ensure_owner(&ownership, &info.sender, || ContractError::Unauthorized {
        val: "Unauthorized mood update attempt".to_string(),
    })?;

    CONFIG.update(deps.storage, |mut config| -> Result<_, ContractError> {
        let updated = config.mood + delta;
        config.mood = updated.clamp(0, 4);
        Ok(config)
    })?;

    Ok(Response::new())
}
```

### 4.6 Rebuild and re-import

```bash
yarn ownables:build my-first
```

Import `ownables/my-first.zip` again. You should now see mood survive refreshes because state is event-driven and queried from the contract, not kept only in widget memory.
