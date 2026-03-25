# Testing

## What to test first

- Init creates expected immutable config.
- Exec updates state deterministically.
- External event admission accepts valid and rejects invalid input.
- Query endpoints expose enough data for wallet verification.

## High-value cases

- Out-of-order external events.
- Network mismatch on external ownable events.
- Missing required external events in hybrid reconciliation tests.
