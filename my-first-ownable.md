# My First Ownable

This guide walks through creating your first custom Ownable package based on `ownables/basic`.

## Prerequisites

- The [SDK](sdk.md) is already set up in `ownables-sdk`
- Dependencies are installed with `yarn install`
- Rust toolchain setup is completed with:

```bash
yarn rustup
```

## 1. Copy, Build, and Issue the package

Copy the starter Ownable:

```bash
cd ../ownables-sdk
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
description = "Happiness cannot be traveled to, owned, earned, worn or consumed. Happiness is the spiritual experience of living every minute with love, grace, and gratitude."
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
    
    div:hover .on { display: none; }
    div:not(:hover) .off { display: none; }
  </style>
</head>
<body>
  <div>
    <span class="on">🙂</span>
    <span class="off">😀</span>
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

    button { font-size: 2rem; padding: 0.4rem 0.8rem; border: 1px solid #d1d5db; border-radius: 0.6rem; background: #fff; cursor: pointer; }
    button:active { transform: translateY(1px); }
  </style>
</head>
<body>
  <div class="container">
    <div id="emoji" class="emoji">😐</div>
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

