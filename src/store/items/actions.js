export const ITEM_ADDED = 'ITEMM_ADDED';
export const ITEM_REMOVED = 'ITEM_REMOVED';
export const ITEM_PRICE_UPDATED = 'ITEM_PRICE_UPDATED';
export const ITEM_QUANTITY_UPDATED = 'ITEM_QUANTITY_UPDATED';

export const addNewItems = (name, price) => ({
  type: ITEM_ADDED,
  payload: { name, price }
});

export const removeItem = (uuid) => ({
  type: ITEM_REMOVED,
  uuid
});

export const updatePrice = (price, uuid) => ({
  type: ITEM_PRICE_UPDATED,
  payload: { price, uuid }
});

export const updateQuantity = (quantity, uuid) => ({
  type: ITEM_QUANTITY_UPDATED,
  payload: { quantity, uuid }
});
