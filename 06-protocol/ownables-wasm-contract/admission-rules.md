# Admission Rules

Contract admission checks are static and local.

## Required behavior

- Validate event class and schema.
- Validate subscription compatibility.
- Validate network domain constraints.
- Reject malformed or policy-incompatible events.

## Explicit non-responsibilities

- Reconstruct full external log history.
- Guarantee global completeness by itself.
- Resolve ambiguous external semantics beyond configured checks.
