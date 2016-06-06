import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class Login extends Component {
	render () {
		return (
			<div>Login</div>
		);
	}
}

function mapStateToProps (state) {
	return {
		// tasks: state.task
		// page: state.page
	}
}

function mapDispatchToProps (dispatch) {
	return {
		// taskActions: bindActionCreators(taskActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
