# Init

`init` creates the Ownable instance and immutable protocol baseline.

## Protocol responsibilities

- Establish identity and initial state.
- Define immutable subscription specification for external events.
- Bind the execution context that later `exec` events depend on.

Changing subscription policy after `init` is not allowed. If policy changes, instantiate a new Ownable.
