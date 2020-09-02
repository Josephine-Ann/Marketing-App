// Features Reducer

const featuresReducerDefaultState = [];

export default (state = featuresReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_FEATURE':
      return [
        ...state,
        action.feature
      ];
    case 'REMOVE_FEATURE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_FEATURE':
      return state.map((feature) => {
        if (feature.id === action.id) {
          return {
            ...feature,
            ...action.updates
          };
        } else {
          return feature;
        };
      });
    case 'SET_FEATURES':
      return action.features;
    default:
      return state;
  }
};

