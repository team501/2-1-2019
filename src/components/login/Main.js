import React, { Component } from 'react';
import {BrowserRouter, Route, Redirect, Switch, Link} from 'react-router-dom';
import './landing.css';
import Dashboard from '../../images/dashboard.jpg';
import Manage from '../../images/manage.jpg';
import Labour from '../../images/labour.jpg';
import ManageEqe from '../../images/manage_eqe.jpg';
import Workmonotring from '../../images/work-monotring.jpg';
import ManageInvontry from '../../images/manage-invontry.jpg';
import Exception from '../../images/exceptions.jpg';
import Report from '../../images/report.jpg';
class Main extends React.Component {
    render(){
      return(
		<div className="main-bg">
				<div className="main-content">
					<ul>
						<li><div className="main-content-img"><img src={Dashboard}/></div>
						<div className="main-content-text">Dashboard</div>
						</li>
						
						<li><div className="main-content-img"><img src={Manage}/></div>
						<div className="main-content-text">Manage Order/Waves</div>
						</li>
					
						<li><div className="main-content-img"><img src={Labour}/></div>
						<div className="main-content-text">Balance Labour</div>
						</li>
					
						<li><div className="main-content-img"><img src={ManageEqe}/></div>
						<div className="main-content-text"><Link to={`/manageequipment`} activeClassName="active">Manage Equipment</Link></div>
						</li>
					
						<div className="clear-both"></div>
						<li><div className="main-content-img"><img src={Workmonotring}/></div>
						<div className="main-content-text">Work Monitoring</div>
						</li>
						
						<li><div className="main-content-img"><img src={ManageInvontry}/></div>
						<div className="main-content-text">Manage Inventory/Waves</div>
						</li>
					
						<li><div className="main-content-img"><img src={Exception}/></div>
						<div className="main-content-text">Exceptions</div>
						</li>
					
						<li><div className="main-content-img"><img src={Report}/></div>
						<div className="main-content-text">Report</div>
						</li>
					</ul>
				</div>
		</div>
      );
    }
  }
export default Main;
