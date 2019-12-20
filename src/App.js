import React, { Component } from 'react';
import Router from './components/Router/Router';
import './assets/styles/shared/flexbox.scss';
import Footer from './components/footer/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faCheck, faTimes);

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;