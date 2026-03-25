# Events

An event is the protocol envelope around payload data.

## Canonical fields

- `mediaType`: MIME type of `data`
- `data`: binary payload
- `previous`: previous event hash
- `timestamp`: signing time in milliseconds
- `signKey`: signer public key and key type
- `signature`: signature over binary representation
- `hash`: hash of binary representation

## JSON encoding notes

- Hashes and signatures are base58 encoded.
- Binary payload is base64 encoded and prefixed when serialized.

## Protocol requirement

Event binary representation is the signed source of truth. JSON is a transport representation.
