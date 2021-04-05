import React, { connect } from 'react';

const searchValue = (value) => {
  const searchString = value;
  this.props.dispatch({
    type: 'FETCH_EGGTWO',
    params: { searchString },
  });
  console.log('searchString is:', value);
};

const Search = (data) => {
  return (
    <div className='main-header-container'>
      <div className='title'>{data.title}</div>
    </div>
  );
};

const mapReduxStateToProps = (reduxState) => ({
  eggOne: reduxState.eggOneReducer,
  eggTwo: reduxState.eggTwoReducer,
  list: reduxState.heroReducer,
  searchState: reduxState.searchReducer,
});

export default connect(mapReduxStateToProps)(Search);
