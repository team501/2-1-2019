import React, { Component } from 'react';
import Header from './Header';
import UnitSorter from '../UnitSorter/Landingpage';
import Footer from './Footer';

class ManageEquipment extends React.Component {
    render(){
      return(<div>
      			<Header/>
      			<UnitSorter />
      			<Footer />
      		</div>
      );
    }
  }
export default ManageEquipment;
