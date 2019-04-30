import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	render() {
		const { title } = this.props;
		return <h1>Hello World {title}</h1>;
	}
}

ReactDOM.render(<App title="第一个app" />, document.getElementById('root'));
