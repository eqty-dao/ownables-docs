# Implement Init and Exec

## Init

Use `init` to set immutable configuration, including external subscription spec where applicable.

## Exec

Use `exec` to apply domain actions.

Recommended pattern:

1. Validate caller authority.
2. Validate action preconditions.
3. Append canonical event payload.
4. Return explicit result state or references.
