# Transfer and Consume

These actions depend on package capabilities. Not every Ownable supports every action.

## Transfer

If transferable, use the actions menu and select `Transfer`.

The SDK validates recipient address format and blocks transfer to your own address.

## Lock

If lockable and not currently locked, use `Lock` from the actions menu.

Locking is used in flows where ownership and control must stay aligned during transitions.

## Consume

If consumable, consume actions are exposed by the Ownable itself. Consuming changes lifecycle state and can affect future allowed actions.
