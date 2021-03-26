import React from 'react';
import { connect } from 'react-redux';
import '../../css/main.css';

import Nav from '../Nav/Nav';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className='root'>
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default connect()(App);
