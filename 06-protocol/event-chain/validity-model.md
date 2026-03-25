# Validity Model

A chain is valid when:

1. Hash links are intact.
2. Signatures are valid for each event.
3. Event payloads satisfy protocol schema.
4. Required external events are complete and consistent with subscription rules.

A chain can be structurally valid but operationally invalid if external reconciliation fails.

Wallet and verifier are responsible for flagging this invalid operational state.
