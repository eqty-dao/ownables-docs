# Invalid Chain States

An invalid chain state occurs when verification fails despite admitted records existing.

Common causes:

- missing required external event
- extra non-admissible external event
- ordering mismatch
- network mismatch
- payload mismatch against expected source data

## Required behavior

- Mark state as invalid in wallet or verifier UI.
- Block sensitive actions until reconciled.
- Provide operator-visible diagnostics for recovery.
