import React from 'react';
import style from 'styles/index.scss';
import juhua from 'images/juhua.jpg';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<h1 className={style.title}>Hello World!</h1>
				<img src={juhua} alt="" />
			</div>
		);
	}
}
