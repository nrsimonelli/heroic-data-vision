import React, { Component } from 'react';
import { connect } from 'react-redux';

class Main extends Component {
  componentDidMount = () => {
    console.log('hello from Main.js');
  };

  state = {};

  render() {
    return (
      <div className='main-root'>
        <div className='main-container'>
          <div>title</div>
          <div>img container</div>
          <div>graph container</div>
          <div>graph container</div>
          <div className='test'></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Main);
