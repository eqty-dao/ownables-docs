# External EVM Event

`external_evm_event` records an admitted EVM log event relevant to the Ownable.

## Source domain

Base / EVM logs.

## Admission conditions

- Matches immutable subscription spec.
- Includes sufficient block and log coordinates for deterministic ordering.
- Passes static contract-side admissibility checks.

## Important boundary

Contract admission is not full authenticity proof of the complete chain context. Wallet and verifier perform full reconciliation.
