# Ingestion Entrypoints

Protocol-level ingestion entrypoints are:

- `register_external_evm_event`
- `register_external_ownable_event`

## Contract role

- Apply static admissibility checks.
- Append accepted external event records to microledger.

## Non-goals at contract layer

- Full global ordering validation across all external domains.
- Semantic decoding of all EVM event meaning.
- Full completeness proof against global log history.
