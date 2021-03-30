const resultReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_RESULT':
      return action.payload;

    case 'CLEAR_RESULT':
      return {};

    default:
      return state;
  }
};

export default resultReducer;
