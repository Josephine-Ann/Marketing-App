export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        uid: action.uid,
        admin: action.admin
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};
