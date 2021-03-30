const eggOneReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_EGGONE':
      return action.payload;

    case 'CLEAR_EGGONE':
      return {};

    default:
      return state;
  }
};

export default eggOneReducer;
