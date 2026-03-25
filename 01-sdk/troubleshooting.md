# Troubleshooting

## Builder button disabled

`VITE_BUILDER` is not configured or builder service is unavailable.

## Wrong network warning

Switch wallet network to the expected Base chain before creating or executing Ownable actions.

## Package import fails

Check that the zip includes required files. For dynamic Ownables this includes contract wasm and schema/query definitions.

## Widget shows nothing

Verify the package contains widget assets and that the Ownable supports the required widget-state query.

## Relay inbox import fails

Check `VITE_RELAY`, wallet connection, and session authentication state.
