import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import './land.css';

class LineChart extends Component {
	
	data = {
			  labels: ['1', '2', '3', '4', '5'],
			  datasets: [
			    {
			      label: this.props.label,
			      fill: false,
			      lineTension: 0,
			      backgroundColor: 'rgba(75,192,192,0)',
			      borderColor: this.props.color,
			      borderCapStyle: 'butt',
			      borderDash: [5,2],
			      borderDashOffset: 0.0,
			      borderJoinStyle: 'miter',
			      pointBorderColor: this.props.color,
			      pointBackgroundColor: this.props.color,
			      pointBorderWidth: 5,
			      pointHoverRadius: 5,
			      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
			      pointHoverBorderColor: 'rgba(220,220,220,1)',
			      pointHoverBorderWidth: 2,
			      pointRadius: 1,
			      pointHitRadius: 10,
			      data: [10, 15, 25, 15, 40, 0]
			    }
			  ]
			};
	
	render() {
		return( <Line width={30}
		   			  height={50}
					  options={{ maintainAspectRatio: false,
			
			scales: {
	            xAxes: [{
	            	gridLines: {
	                    color: "rgba(255, 255, 255, 0)"
	                },
	                ticks: {
	                    display: false
	                }
	            }],
	            yAxes: [{
	            	gridLines: {
	                    color: "rgba(255, 255, 255, 0)"
	                },
	                ticks: {
	                    display: false
	                }
	            }]
	        }}} data={this.data} /> );
	}
}
export default LineChart;