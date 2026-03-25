# Core Runtime

`@ownables/core` is the main runtime layer.

Primary services:

- `EventChainService`
- `OwnableService`
- `SIWEClient`

Core integration responsibility is wiring interfaces correctly:

- `AnchorProvider`
- `StateStore`
- `PackageAssetIO`
- optional `RuntimeSourceProvider`

Keep these boundaries explicit so you can swap storage, signing, and transport without rewriting domain logic.
