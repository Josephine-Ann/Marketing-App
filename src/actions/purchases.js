// import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_PURCHASE
export const addPurchase = (purchase) => ({
    type: 'ADD_PURCHASE',
    purchase
});

export const startAddPurchase = (purchaseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            address = '',
            extraInfo = '',
            featureId = '',
            bought = false
        } = purchaseData;
        const purchase = { address, bought, extraInfo, featureId }
        database.ref(`users/${uid}/purchases`).push(purchase).then((ref) => {
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
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/purchases/${id}`).remove().then(() => {
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
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/purchases/${id}`).update(updates).then(() => {
            dispatch(editPurchase(id, updates));
        });
    };
};


export const setPurchases = (purchases) => ({
    type: 'SET_PURCHASES',
    purchases
})

export const startSetPurchases = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/purchases`).once('value').then((snapshot) => {
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


