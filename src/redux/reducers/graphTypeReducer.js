const graphTypeReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_RADAR':
      return { type: 'RADAR' };

    case 'SET_LINE':
      return { type: 'LINE' };

    case 'SET_BAR':
      return { type: 'BAR' };

    default:
      return state;
  }
};

export default graphTypeReducer;
