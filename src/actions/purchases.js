// import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_PURCHASE
export const addPurchase = (purchase) => ({
    type: 'ADD_PURCHASE',
    purchase
});

export const startAddPurchase = (purchaseData = {}) => {
    return (dispatch) => {
        const {
            address = '',
            extraInfo = '',
            amount = 0,
            quantity = 0,
            featureId = ''
        } = purchaseData;
        const purchase = { address, amount, quantity, extraInfo, featureId }
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

export const startEditPurchase = (id, updates) => {
    return (dispatch) => {
        return database.ref(`purchases/${id}`).update(updates).then(() => {
            dispatch(editPurchase(id, updates));
        });
    };
};


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


