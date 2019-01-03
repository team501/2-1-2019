import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import InductsForDay from './InductsForTheDay';
import SortsForTheDay from './SortsForTheDay';
import InductsForlastHour from './InductsForlastHour';
import SortsForlastHour from './SortsForlastHour';
import Sorter from './Sorter';


import WaveStatus from './WaveStatus';

const root = {
    flexGrow: 1,
    padding: '50px 20px 20px 20px'
  }

const paper = {
    padding: '0px',
    height: 200
  }
const headingFont = {
	    color: '#870038',
	    fontWeight: '400',
	    fontSize: '24px',
	    padding: '60px 0px 20px 0px'
};
class index extends Component {
	render() { 
		return (
					<div style={root}>
				      <Grid container spacing={8}>
				        <Grid style={headingFont} item xs={12} sm={12}>
				        	Unit Sorter Dashboard
				        </Grid>
				        <Grid item xs={6} sm={3}>
				          <Paper style={paper}>
				          	<InductsForDay />
				          </Paper>
				        </Grid>
				        <Grid item xs={12} sm={9}>
				          <Paper style={paper}>
				          	<WaveStatus />
				          </Paper>
				        </Grid>
				        <Grid item xs={6} sm={3}>
				          <Paper style={paper}>
				          	<InductsForlastHour />
				          </Paper>
				        </Grid>
				        <Grid item xs={12} sm={9}>
				          <Paper style={paper}>
				          	<Sorter data={'Sorter A'}/>
				          </Paper>
				        </Grid>
				        <Grid item xs={6} sm={3}>
				          <Paper style={paper}>
				          	<SortsForTheDay />
				          </Paper>
				        </Grid>
				        <Grid item xs={12} sm={9}>
				          <Paper style={paper}>
				          	<Sorter data={'Sorter B'}/>
				          </Paper>
				        </Grid>
				        <Grid item xs={6} sm={3}>
				          <Paper style={paper}>
				          	<SortsForlastHour />
				          </Paper>
				        </Grid>
				        <Grid item xs={12} sm={9}>
				          <Paper style={paper}>
				          <Sorter data={'Sorter C'}/>
				          </Paper>
				        </Grid>
				      </Grid>
				    </div>
			); }
}

export default index;