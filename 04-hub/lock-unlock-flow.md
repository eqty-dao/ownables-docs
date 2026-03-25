# Lock and Unlock Flow

Hybrid mode requires locking semantics.

## Why locking exists

If ownership is external (Base NFT) and behavior is private, lock prevents split authority during transfer windows.

## Flow outline

1. Lock before state-sensitive ownership transition.
2. Validate ownership context.
3. Perform transition.
4. Unlock when consistency checks pass.
