# Verification Boundary

Contracts and hub perform admission and policy checks.

Wallet and verifier perform full reconciliation.

This boundary keeps contracts simpler and keeps replay correctness in the component that can access complete external log context.
