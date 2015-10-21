import * as React from "react";

require("./../styles/index.scss");

export interface IAppProps {
	name: string;
}

export default class App extends React.Component<IAppProps, any> {
	render() {
		return (
			<h1>testing thjdfis, {this.props.name}!</h1>
		);
	}
}
