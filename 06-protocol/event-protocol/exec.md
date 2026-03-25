# Exec

`exec` represents state-changing domain actions.

## Protocol responsibilities

- Carry canonical action payload.
- Be authorized under current ownership and policy state.
- Produce deterministic state transition under replay.

`exec` does not replace external event reconciliation in hybrid mode. It operates within the verified context.
