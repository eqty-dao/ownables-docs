# Common Workflows

## Local development loop

1. Build package zips with `yarn ownables:build`.
2. Upload package zip in the wallet.
3. Instantiate and test widget actions.
4. Rebuild and repeat.

## Receive packages from relay inbox

1. Connect wallet.
2. Open issue/import panel.
3. Import packages from relay inbox when available.
4. Review and instantiate downloaded package.

## Exchange between users

1. Sender transfers Ownable to recipient address.
2. Recipient imports and opens package.
3. Both sides verify expected state and ownership after events are applied.
