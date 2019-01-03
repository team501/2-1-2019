import React, {Component} from 'react';
import ReactSpeedometer from "react-d3-speedometer"


class SpeedoMeter extends Component {
	
	render() {
		return(<ReactSpeedometer segments={3} 
								 width={150} 
								 height={90} 
								 ringWidth={10}
								 minValue={0} 
								 maxValue={100}
								 value={this.props.value}
								 needleHeightRatio={0.8}
								 textColor=" rgba(255, 255, 255, 0)"
				/>);
	}
}
export default SpeedoMeter;