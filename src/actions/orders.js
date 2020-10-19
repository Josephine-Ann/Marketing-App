// import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_ORDER
export const addOrder = (order) => ({
    type: 'ADD_ORDER',
    order
});

export const startAddOrder = (orderData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            orderId = '',
            date = Date.now()
        } = orderData;
        const order = { orderId, date }
        database.ref(`users/${uid}/orders`).push(order).then((ref) => {
            dispatch(addOrder({
                id: ref.key,
                ...order
            }));
        })
    }
}

export const setOrders = (orders) => ({
    type: 'SET_ORDERS',
    orders
})

export const startSetOrders = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/orders`).once('value').then((snapshot) => {
            const orders = [];

            snapshot.forEach((childSnapshot) => {
                orders.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setOrders(orders));
        });
    };
};