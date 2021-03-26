const superReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return action.payload;

    case 'CLEAR_DATA':
      return {};

    default:
      return state;
  }
};

export default superReducer;
