# Lifecycle

Typical lifecycle phases:

1. Initialization (`init`)
2. Active usage (`exec` events)
3. Transfer, transform, or consume
4. Archived or terminal state

Lifecycle transitions are represented by events, not hidden mutable fields.
