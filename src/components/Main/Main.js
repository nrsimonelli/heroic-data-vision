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
        <div className='main-header-container'>
          <div className='title'>title</div>
          <div className='select'>select</div>
        </div>
        <div className='main-content-container'>
          <div className='image-primary'>
            <div className='image'></div>
            <div className='image-description'>description</div>
          </div>
          <div className='graph-primary'>
            <div className='graph'></div>
          </div>
          <div className='graph-secondary'>
            <div className='graph'></div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Main);
