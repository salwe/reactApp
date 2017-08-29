import React from "react";

export class AliveTimer extends React.Component {
	constructor(props) {
		super();
		this.state = {
			startDate: '2017-08-26',
			diffDate: '0 : 00 : 00 : 00',
			timerId: setInterval(this.calcTime.bind(this), 1000)
		}
	}

	calcTime() {
		var currDate = new Date();
		var startDate = new Date(this.state.startDate);
		var diffMs = Math.abs(startDate - currDate);
		var diffDays = Math.floor(diffMs / 86400000); // days
		var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
		var diffMins = Math.floor(((diffMs % 86400000) % 3600000) / 60000); // minutes
		var diffSecs = Math.floor((((diffMs % 86400000) % 3600000) % 60000) / 1000); // secs

		diffHrs = (diffHrs >= 10 ? diffHrs : ("0" + diffHrs));
		diffMins = (diffMins >= 10 ? diffMins : ("0" + diffMins));
		diffSecs = (diffSecs >= 10 ? diffSecs : ("0" + diffSecs));
		this.setState({
			diffDate: (diffDays + " : " + diffHrs + " : " + diffMins + " : " + diffSecs)
		});
	}
	componentDidMount(props) {
		this.setState({
			diffDate: this.calcTime()
		});
	}
	componentWillUnmount() {
		clearInterval(this.state.timerId);
	}

	render() {
		return (
			<p>I'm alive {this.state.diffDate}</p>
		);
	}
}