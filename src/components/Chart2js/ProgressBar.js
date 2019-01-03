import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const Example = (props) => {
  return (
    <div>
      <ProgressBar>
      	<ProgressBar active striped bsStyle="success" now={33} key={1} />
      	<ProgressBar active bsStyle="warning" now={33} key={2} />
      	<ProgressBar active active bsStyle="danger" now={34} key={3} />
      </ProgressBar>
    </div>
  );
};

export default Example;