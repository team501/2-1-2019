import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class Landingpage extends React.Component {
    render(){
      return(
        <div>
        <Header/>
          <Main/>
        <Footer/>
        </div>
      );
    }
  }
export default Landingpage;
