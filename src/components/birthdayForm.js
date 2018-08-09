import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

class BirthdayForm extends Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
				<div>
					<h1>Birthday Form Component</h1>
					<DatePicker />
				</div>
			)

	}
}

export default BirthdayForm;