import React, { Component } from 'react';
import Header from '../../login/Header';
import UnitSorter from './Landingpage';
import Footer from '../../login/Footer';

class SorterDetailContainer extends Component {
    render(){
      return(<div>
      			<Header/>
      			<UnitSorter />
      			<Footer />
      		</div>
      );
    }
  }
export default SorterDetailContainer;
