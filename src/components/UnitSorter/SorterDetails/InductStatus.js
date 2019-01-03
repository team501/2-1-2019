import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
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
					Induction status per hour
				</Grid>
				<Grid style={mainGrid} container spacing={24}>
					<Grid item xs={8} sm={8}>
						<Grid style={headingGrid2} item xs={12} sm={12}>
							Chart
						</Grid>
					</Grid>
					
					<Grid item xs={4} sm={4}>
						<Grid style={headingGrid2} item xs={12} sm={12}>
							<div style={{float: 'right', fontSize: '18px', fontWeight: '600'}}> 
								<Link to={`/chuteStatus`}> > </Link>
							</div>
						</Grid>
					</Grid>
				</Grid>	
			</Grid>
	); }
}
export default index;