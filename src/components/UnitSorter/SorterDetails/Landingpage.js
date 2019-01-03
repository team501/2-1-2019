import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import InductsForDay from '../InductsForTheDay';
import SortsForTheDay from '../SortsForTheDay';
import InductsForlastHour from '../InductsForlastHour';
import SortsForlastHour from '../SortsForlastHour';
import Runtime from './watches/Runtime';
import Total from './watches/Total';
import Stop from './watches/Stop';
import InductStatus from './InductStatus';

const root = {
    flexGrow: 1,
    padding: '50px 20px 20px 20px'
};

const paper = {
    padding: '0px',
    height: 200
};

const paper2 = {
	    padding: '0px',
	    height: 405
	};

const headingFont = {
	    color: '#870038',
	    fontWeight: '400',
	    fontSize: '24px',
	    padding: '60px 0px 20px 0px'
};

const rightGrid = {
	    paddingLeft: '12px'
};

const leftGrid = {
	    paddingLeft: '8px'
};

class index extends Component {
	render() { 
		return ( <div style={root}>
				 	<Grid container spacing={8}>
				 	
				 	
				 		<Grid style={headingFont} item xs={12} sm={12}>
				        	Sorter A
				        </Grid>
				        		
				        	
				        <Grid style={leftGrid} container xs={6} sm={3} spacing={8}>
				        	<Grid item xs={12} sm={12}>
				        		<Paper style={paper}>
				        			<InductsForDay />
				        		</Paper>
				        	</Grid>
				        	<Grid item xs={12} sm={12}>
					        	<Paper style={paper}>
					          		<InductsForlastHour />
					          	</Paper>
					        </Grid>
					        <Grid item xs={12} sm={12}>
					        	<Paper style={paper}>
					          		<SortsForTheDay />
					          	</Paper>
					        </Grid>
					        <Grid item xs={12} sm={12}>
					        	<Paper style={paper}>
					          		<SortsForlastHour />
					          	</Paper>
					        </Grid>
				      	</Grid>
				      	
				      	
				      	<Grid style={rightGrid} container xs={6} sm={9} spacing={8}>
				      		<Grid item xs={4} sm={4}>
				      			<Paper style={paper}>
				      				<Runtime />
				      			</Paper>
				      		</Grid>
				      		<Grid item xs={4} sm={4}>
				      			<Paper style={paper}>
				      				<Total />
				      			</Paper>
				      		</Grid>
				      		<Grid item xs={4} sm={4}>
				      			<Paper style={paper}>
				      				<Stop />
				      			</Paper>
				      		</Grid>
				      		<Grid item xs={6} sm={12}>
				      			<Paper style={paper}>
				      				<InductStatus />
				      			</Paper>
					        </Grid>
					        <Grid item xs={6} sm={12}>
			      				<Paper style={paper2}>
			      				</Paper>
			      			</Grid>
		      			</Grid>
		      			
		      			
		      		   </Grid>
				    </div>
			); }
}

export default index;