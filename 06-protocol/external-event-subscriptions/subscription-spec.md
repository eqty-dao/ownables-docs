# Subscription Spec

A subscription spec describes:

- source domain and network
- event selectors or filters
- required fields for admission
- whether event category is mandatory for validity

## Protocol rules

- Spec is immutable per Ownable instance.
- Spec must be queryable by verifiers.
- Missing required events results in invalid operational state.
