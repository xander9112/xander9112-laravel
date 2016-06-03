import React, {PropTypes, Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton'

export default class Page extends Component {
	constructor (props) {
		super(props);
	}

	onYearBtnClick (e) {
		this.props.getPhotos(+e.target.textContent);
	}

	render () {

		return (
			<div>
			</div>
		);
	}
}

Page.propTypes = {
	year:      PropTypes.number.isRequired,
	photos:    PropTypes.array.isRequired,
	getPhotos: PropTypes.func.isRequired,
	error:     PropTypes.string.isRequired
};
