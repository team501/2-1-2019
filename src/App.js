import React, { Component } from 'react';
import Login from './components/login/Login';
import Routes from './components/login/routes';
<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>

class App extends Component {
	render() {
		return (
			<div>
				<Routes/>
			</div>
		);
	}
}

export default App;
