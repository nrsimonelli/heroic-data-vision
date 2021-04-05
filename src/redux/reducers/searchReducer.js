const searchReducer = (state = { active: false }, action) => {
  switch (action.type) {
    case 'SET_SEARCH':
      return { active: true };

    case 'CLEAR_SEARCH':
      return { active: false };

    default:
      return state;
  }
};

export default searchReducer;
