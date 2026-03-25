# In-Browser Builder

The SDK wallet includes a Builder flow for creating package uploads from a simple form.

What it does:

- Collects Ownable metadata and media.
- Produces upload payload and package metadata.
- Submits to configured builder endpoint.

What you need:

- `VITE_BUILDER` configured.
- Connected wallet.
- Correct Base network selected.

If the builder flow is unavailable, use zip import from local packages as fallback.
