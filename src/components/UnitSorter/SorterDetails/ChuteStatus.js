import React, { Component } from 'react';
import Header from '../../login/Header';
import ChuteStatuus from './Chute/ChuteStatuss';
import Footer from '../../login/Footer';


class ChuteStatus extends Component {
    render(){
      return(<div>
      			<Header/>
      			<ChuteStatuus />
      			<Footer />
      		</div>
      );
    }
  }
export default ChuteStatus;
