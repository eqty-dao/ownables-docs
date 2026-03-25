# Common Workflows

## Receive and accept an Ownable

1. Receive availability notification.
2. Validate payload and source.
3. Trigger accept flow.
4. Pull chain and package assets.
5. Confirm state and ownership in wallet UI.

## Update Ownable state

1. Load latest chain state.
2. Run `exec` action.
3. Persist updated chain.
4. Reconcile with external events if hybrid mode is enabled.

## Recover on a new device

1. Restore account keys.
2. Rehydrate chain snapshots and package cache.
3. Re-run verification before showing writable state.
