import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const Example = (props) => {
  return (
    <div>
    	<ProgressBar style={{height: '5px'}} bsStyle={props.progressColor} now={props.value} />
    </div>
  );
};

export default Example;