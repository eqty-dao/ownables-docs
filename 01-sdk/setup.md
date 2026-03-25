# Setup

## Minimal runtime wiring

Ownables runtime needs four building blocks:

- `StateStore` for persistent state.
- `AnchorProvider` for signing and anchoring.
- `PackageAssetIO` for loading package assets.
- `EventChainService` and `OwnableService` for execution.

```ts
import { EventChainService, OwnableService } from "@ownables/core";

const chains = new EventChainService(stateStore, anchorProvider);
const ownables = new OwnableService(stateStore, chains, anchorProvider, packageAssetIO);
```

## Network setup

Use a Base-compatible RPC and set your expected chain id at startup. Reject mismatches early.

## Storage setup

For browser apps, use `IDBService` for durable state. For server apps, use a bucket or filesystem-backed store through `@ownables/platform-node`.

## Security baseline

- Keep signing keys isolated from UI code when possible.
- Verify chain/network ids in all EVM-facing operations.
- Pin expected package hashes for reproducible execution.
