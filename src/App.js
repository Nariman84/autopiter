import React from 'react';
import './app.css';

import Header from './component/header/Header';
import Main from './component/main/Main';

class App extends React.Component {

	render() {
		return (
			<div className="app">
				<Header />
				<Main />
			</div>
		);
	}
}

export default App;