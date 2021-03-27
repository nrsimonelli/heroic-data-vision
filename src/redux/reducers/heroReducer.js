const heroReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_HERO':
      return action.payload;

    case 'CLEAR_HERO':
      return {};

    default:
      return state;
  }
};

export default heroReducer;
