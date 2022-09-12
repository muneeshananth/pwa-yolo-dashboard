import React, { Component } from 'react'

import Header from './Header';
import Menu from './Menu';
import Dashboard from './Dashboard';
import Footer from './Footer';

export default class Main extends Component {

  render() {
    return (

      <div class="wrapper">
        <Header/>
        <Menu/>
        <Dashboard/>
        <Footer/>
      </div>
    )
  }
}
