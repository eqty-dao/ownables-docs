# Manage Ownables

Managing an Ownable means working with its event chain, not only reading a balance.

## Daily actions

- Load event chain state.
- Query current state from runtime.
- Execute domain actions.
- Persist updated chain.

```ts
const rpc = ownables.rpc(chain.id);
const state = await rpc.query({ get_state: {} });
await rpc.exec({ action: "update_profile", data: { level: 2 } });
```

## Ownership checks

In hybrid mode, check ownership against external Base events before allowing privileged actions.

## State integrity

Always persist after successful execution and verify the latest chain head before presenting UI-confirmed state.
