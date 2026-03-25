# External Event Admission (Practical)

Contracts admit external events through dedicated entrypoints.

- `register_external_evm_event`
- `register_external_ownable_event`

Admission checks should be strict and static:

- Match immutable subscription rules.
- Reject wrong network domain.
- Enforce required structural fields.

Do not put full chain reconstruction in contract code. That belongs in wallet or verifier logic.
