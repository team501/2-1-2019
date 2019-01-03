import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import ProgressLine from '../Chart2js/ProgressLine';
import {Link} from 'react-router-dom';

const headingGrid = {
		textAlign: 'left',
		height: '25px',
		fontSize: 'large',
		padding: '5px'
};

const headingGrid2 = {
		textAlign: 'left',
		height: '25px',
	    fontSize: 'medium',
		padding: '5px'
};

const headingGrid3 = {
		height: '25px',
	    fontSize: 'medium',
		padding: '5px'
};

const bottomGrid = {
		textAlign: 'left',
		height: '25px',
	    fontSize: 'x-large',
		padding: '5px'
};

const mainGrid = {
		padding: '25px',
		height: '170px',
};

const gridContent = {
		height: '70px',
		padding: '20px',
		fontSize: 'xx-large'	
};

class index extends Component {
	render() { return (
			
			<Grid container>
				<Grid style={headingGrid} item xs={12} sm={12}>
					{this.props.data}
				</Grid>
				<Grid style={mainGrid} container spacing={24}>
					<Grid item xs={4} sm={4}>
						<Grid style={headingGrid2} item xs={12} sm={12}>
							Inducts for last hour
						</Grid>
							
						<Grid style={headingGrid2} item xs={12} sm={12}>
							<ProgressLine progressColor={'success'} value={70}/>
						</Grid>
						
						<Grid style={bottomGrid} item xs={12} sm={12}>
							2,000
						</Grid>
					</Grid>
					
					<Grid item xs={4} sm={4}>
						<Grid style={headingGrid2} item xs={12} sm={12}>
							Sorts for last hour
						</Grid>
					
						<Grid style={headingGrid2} item xs={12} sm={12}>
							<ProgressLine progressColor={'danger'} value={30}/>
						</Grid>
				
						<Grid style={bottomGrid} item xs={12} sm={12}>
							2,000
						</Grid>
					</Grid>
				
					<Grid item xs={4} sm={4}>
						<Grid style={headingGrid2} item xs={12} sm={12}>
							<div style={{float: 'left'}}>Chute Status</div>
							<div style={{float: 'right', fontSize: '18px', fontWeight: '600'}}> 
								<Link to={`/sorterdetails`}> > </Link>
								</div>
						</Grid>
						<Grid container spacing={24}>
							<Grid item xs={12} sm={6} style={{textAlign: 'center'}}>
								<Grid style={gridContent} item xs={12} sm={12}>
									80%
								</Grid>
								<Grid style={headingGrid3} item xs={12} sm={12}>
									Assigned
								</Grid>
							</Grid>
							<Grid item xs={12} sm={6} style={{textAlign: 'center'}}>
								<Grid style={gridContent} item xs={12} sm={12}>
									452
								</Grid>
								<Grid style={headingGrid3} item xs={12} sm={12}>
									Full
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>	
			</Grid>
	); }
}
export default index;