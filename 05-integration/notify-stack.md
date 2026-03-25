# Notify Stack

Notify packages provide consistent event publication and client ingestion.

- `@ownables/notify-core`
- `@ownables/notify-client`
- `@ownables/notify-publisher`

Canonical event type:

- `ownables.v1.available`

Recommended split:

- Publisher in backend services.
- Client ingestion in wallet or app UI layer.
- Shared payload builder and validator from `notify-core`.
