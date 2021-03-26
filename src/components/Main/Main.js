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
        <div className='container'>
          <div className='content'>main content</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Main);
