import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import ProgressBar from '../Chart2js/ProgressBar';
import { Label  } from 'react-bootstrap';

const headingGrid = {
		textAlign: 'left',
		height: '25px',
		fontSize: 'large',
		padding: '5px'
};

const headingGrid2 = {
		textAlign: 'right',
		height: '25px',
		fontSize: 'large',
		padding: '5px'
};

const mainGrid = {
		padding: '40px',
		height: '40px',
};

const mainGridLegends = {
		height: '40px',
		fontSize: 'xx-large'
};

class index extends Component {
	render() { return (
			
			<Grid container>
				<Grid style={headingGrid} item xs={12} sm={6}>
					Wave status today
				</Grid>
				<Grid style={headingGrid2} item xs={12} sm={6}>
					Wave 20 &nbsp; &nbsp; Units 9,000
				</Grid>
				<Grid style={mainGrid} item xs={12} sm={12}>
					<ProgressBar />
				</Grid>
				<Grid style={{textAlign: 'center'}}container>
					<Grid item xs={4} sm={4}>
						<Label bsStyle="success">Allocated</Label>{' '}
						<Grid style={mainGridLegends} item xs={12} sm={12}>
							3000
						</Grid>
					</Grid>
					<Grid item xs={4} sm={4}>
						<Label bsStyle="warning">Sorted</Label>{' '}
						<Grid style={mainGridLegends} item xs={12} sm={12}>
							3000
						</Grid>
					</Grid>
					<Grid item xs={4} sm={4}>
						<Label bsStyle="danger">Remaining</Label>
						<Grid style={mainGridLegends} item xs={12} sm={12}>
							3000
						</Grid>
					</Grid>
				</Grid>
			</Grid>
	); }
}
export default index;