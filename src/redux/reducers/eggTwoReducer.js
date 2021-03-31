const eggTwoReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_EGGTWO':
      return action.payload;

    case 'CLEAR_EGGTWO':
      return {};

    default:
      return state;
  }
};

export default eggTwoReducer;
