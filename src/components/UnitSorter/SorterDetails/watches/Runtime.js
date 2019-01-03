import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';

import Runtime from '../../../../images/runtime_icon.png';
const content = {
	    padding: '0px',
	    textAlign: 'center'
}

const imageGrid = {
		padding: '5px'
};

class index extends Component { 
	render() { 
		return (
				 <Grid style={content} container>
				 	<Grid style={imageGrid} item xs={12} sm={12}> <img src={Runtime} /> </Grid>
				 	<Grid item xs={12} sm={12} style={{fontSize: '24px'}}> Runtime </Grid>
				 	<Grid item xs={12} sm={12} style={{fontSize: '48px', color: '#008bff'}}> 01:23 Hrs </Grid>
				 </Grid>
		);}
}
export default index;