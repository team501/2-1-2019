import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './landing.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../images/Fortna_logo.png';
import Right from '../../images/right-image.jpg';
import Menu from '../../images/menu_icon.jpg';
import Close from '../../images/close.jpg';
import Dashboard from '../../images/dashboard_icon.jpg';
import BalanceLbr from '../../images/balanceLabor_icon.jpg';
import Equipment from '../../images/equipment_icon.jpg';
import ManageInvt from '../../images/manageInventory_icon.jpg';
import ManageOrdr from '../../images/manageOrder_icon.jpg';
import Reports from '../../images/reports_icon.jpg';
import WorkMonitoring from '../../images/workMonitoring_icon.jpg';
import Exception from '../../images/exception_icon.jpg';


class Header extends Component {
	
	constructor() {
	    super();
	    
	    this.state = {
	    		displayMenu: false,
	    }
	    this.showDropdownMenu = this.showDropdownMenu.bind(this);
	    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
	  }
	
	  getImageName = () => this.state.displayMenu ? Close : Menu

		showDropdownMenu(event) {
		    event.preventDefault();
		    this.setState({ displayMenu: true }, () => {
		    document.addEventListener('click', this.hideDropdownMenu);
		    });
		  }

		  hideDropdownMenu() {
		    this.setState({ displayMenu: false }, () => {
		      document.removeEventListener('click', this.hideDropdownMenu);
		    });

		  }
		  
    render(){
		    const imageName = this.getImageName();
		    return(
		    		<div style={{marginLeft: '0px'}} className="header-bg row">
		    		<div className="logo"><img src={Logo} className="logo-image"/></div>
		    		<div className="menu"><img src={imageName} onClick={this.showDropdownMenu}/>
		    		{
		    			this.state.displayMenu
		    			? (
		    					<div className="menuList" id="menulst">
		    					<ul >
		    					<li> <img src={Dashboard} className="image" />Dashboard </li>
		    					<li> <img src={BalanceLbr} className="image"/> Balance Labor</li>
		    					<li> <img src={WorkMonitoring} className="image"/> Work Monitoring</li>
		    					<li> <img src={Exception} className="image"/> Exceptions </li>
		    					<li> <img src={ManageOrdr} className="image"/> Manage Order/Waves </li>
		    					<li> <img src={Equipment} className="image"/><Link to={`/manageequipment`} activeClassName="active">Manage Equipment</Link></li>
		    					<li> <img src={ManageInvt} className="image"/> Manage Inventory </li>
		    					<li> <img src={Reports} className="image"/> Reports </li>
		    					</ul>
		    					</div>

		    			)
		    			: (
		    					null
		    			)
		    		}
		    		</div>
		    		<div className="rightsec"><img src={Right}/></div>
		    		</div>
		    );
    }
  }
export default Header;
