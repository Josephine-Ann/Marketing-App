// Purchases Reducer

const ordersReducerDefaultState = [];

export default (state = ordersReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_ORDER':
            return [
                ...state,
                action.order
            ];
        case 'SET_ORDERS':
            return action.orders;
        default:
            return state;
    }
};