const superReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_ALL':
      return action.payload;

    case 'CLEAR_ALL':
      return {};

    default:
      return state;
  }
};

export default superReducer;
