import * as React from "react";

require("./../styles/index.scss");

export interface IAppProps {
	name: string;
}

export default class App extends React.Component<IAppProps, any> {
	render() {
		return (
			<div>
				<h1>testing fvdf, {this.props.name}!</h1>
				<div className="test">overlay background</div>
			</div>
		);
	}
}
