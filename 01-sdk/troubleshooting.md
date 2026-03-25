# Troubleshooting

## Chain verifies locally but fails in wallet

Likely cause: missing or extra external events.

Action: re-run reconciliation against Base logs and inspect ordering key `(blockNumber, transactionIndex, logIndex)`.

## Deploy succeeds but runtime query fails

Likely cause: package asset mismatch or wrong expected code hash.

Action: verify CID, asset loader, and wasm/code hash binding.

## Permission denied on exec

Likely cause: ownership authority mismatch.

Action: confirm lock status and effective owner from the configured ownership model.
