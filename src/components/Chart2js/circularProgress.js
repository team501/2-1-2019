import React, {Component} from 'react';
import CircularProgressbar from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';


class CircularProgress extends Component {
	
	percentage = this.props.percentage;
	
	render() {
		return(
				<CircularProgressbar
				  percentage={this.percentage}
				  text={`${this.percentage}%`}
				  background
				  backgroundPadding={0}
				  styles={{
				    path: { stroke: `rgba(156,39,176, ${this.percentage / 100})`, strokeLinecap: 'butt' },
				    text: { fill: '#FAFAFA', fontSize: '16px' },
				    trail: { stroke: '#FAFAFA' },
				    background: {
			            fill: '#607D8B',
			          }
				  }}
				/>	
		);
	}
}
export default CircularProgress;