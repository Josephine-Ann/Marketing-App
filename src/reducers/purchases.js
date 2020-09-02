// Purchases Reducer

const purchasesReducerDefaultState = [];

export default (state = purchasesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_PURCHASE':
            return [
                ...state,
                action.purchase
            ];
        case 'REMOVE_PURCHASE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_PURCHASE':
            return state.map((purchase) => {
                if (purchase.id === action.id) {
                    return {
                        ...purchase,
                        ...action.updates
                    };
                } else {
                    return purchase;
                };
            });
        case 'SET_PURCHASES':
            return action.purchases;
        default:
            return state;
    }
};