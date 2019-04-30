import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app';

const render = App => {
	ReactDOM.render(<App />, document.getElementById('root'));
};

render(App);

//热模块替换
if (module.hot) {
	module.hot.accept('components/app', () => {
		render(App);
	});
}
