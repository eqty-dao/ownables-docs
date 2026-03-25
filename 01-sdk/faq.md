# FAQ

## Is this chapter for `ownables-js`?

No. This chapter is for `ownables-sdk` wallet and toolkit usage.

## Do I need Rust to use the SDK wallet?

No for basic usage. Yes if you want to build Ownable examples locally from source.

## Where do package zips come from?

From `yarn ownables:build` in `../ownables-sdk`, or from builder and relay-based flows.

## Does every Ownable support transfer, lock, and consume?

No. Capabilities depend on the Ownable package and contract methods.

## Does the widget call external internet APIs?

The intended model is that widget rendering is based on Ownable state provided through widget-state query, running in a sandboxed frame.
