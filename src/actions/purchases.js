import uuid from 'uuid';

// ADD_PURCHASE
export const addPurchase = (
    {
        description = '',
        name = '',
        amount = 0,
        quantity = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_PURCHASE',
    purchase: {
        id: uuid(),
        description,
        name,
        amount,
        quantity,
        createdAt
    }
});

// REMOVE_FEATURE
export const removePurchase = ({ id } = {}) => ({
    type: 'REMOVE_PURCHASE',
    id
});

// EDIT_FEATURE
export const editPurchase = (id, updates) => ({
    type: 'EDIT_PURCHASE',
    id,
    updates
});

