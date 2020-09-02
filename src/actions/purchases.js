
// ADD_PURCHASE
export const addPurchase = (purchase) => ({
    type: 'ADD_PURCHASE',
    purchase
});

export const startAddPurchase = (purchaseData = {}) => {
    return (dispatch) => {
        const {
            address = '',
            name = '',
            amount = 0,
            quantity = 0,
        } = purchaseData;
        const purchase = { address, name, amount, quantity }
        database.ref('purchases').push(purchase).then((ref) => {
            dispatch(addPurchase({
                id: ref.key,
                ...purchase
            }));
        })
    }
}

// REMOVE_purchase
export const removePurchase = ({ id } = {}) => ({
    type: 'REMOVE_PURCHASE',
    id
});

export const startRemovePurchase = ({ id } = {}) => {
    return (dispatch) => {
        return database.ref(`purchases/${id}`).remove().then(() => {
            dispatch(removePurchase({ id }));
        });
    };
};

// EDIT_purchase
export const editPurchase = (id, updates) => ({
    type: 'EDIT_PURCHASE',
    id,
    updates
});

export const setPurchases = (purchases) => ({
    type: 'SET_PURCHASES',
    purchases
})

export const startSetPurchases = () => {
    return (dispatch) => {
        return database.ref('purchases').once('value').then((snapshot) => {
            const purchases = [];

            snapshot.forEach((childSnapshot) => {
                purchases.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setPurchases(purchases));
        });
    };
};


