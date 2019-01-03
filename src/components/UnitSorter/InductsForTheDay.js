import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import CircularprogressBar from '../Chart2js/circularProgress';
import LineChart from '../Chart2js/lineChart';

const headingGrid = {
		textAlign: 'left',
		height: '25px',
		fontSize: 'large',
		padding: '5px'
};

const mainGrid = {
		padding: '2px',
		height: '170px',
};

const leftcontentDiv = {
		padding: '2px',
		height: '100%'
};

const rightcontentDiv = {
		height: '70px',
};

const footGrid = {
		height: '100px'
};

class index extends Component{
	render(){
		return (
				<Grid container>
					<Grid style={headingGrid} item xs={12} sm={12}>
						Inducts for the day
					</Grid>
					<Grid xs={12} sm={4}>
						<div style={leftcontentDiv}>
							<div style={{padding: '20px 0px 0px 0px'}}>
								<CircularprogressBar percentage={83}/>
							</div>
						</div>
					</Grid>
					<Grid style={mainGrid} item xs={12} sm={8} container>
						<Grid item xs={12} sm={12}>
						<div style={rightcontentDiv}>
							<Grid container style={{ fontFamily: 'sans-serif',
													 fontSize: 'x-large',
													 fontWeight: 'bold',
													 padding: '30px 0px 0px 0px',
													 textAlign: 'left'
												  }}>
							<Grid item xs={12} sm={12}>25,000/
							<label style={{ color: 'greenyellow', fontSize: 'x-large' }}>30000</label></Grid>
						</Grid>
					</div>
						</Grid>
						<Grid style={footGrid} item xs={12} sm={12}>
							<div style={footGrid}>
								<LineChart label={'Last 5 Days'} color={'green'}/>
							</div>
						</Grid>
					</Grid>
				</Grid>
		);
	}
}
export default index;
