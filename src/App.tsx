import * as React from "react";

export interface IAppProps {
	name: string;
}

export default class App extends React.Component<IAppProps, any> {
	render() {
		return (
			<h1>testing this, {this.props.name}!</h1>
		);
	}
}
