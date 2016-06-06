import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import NavBar from '../components/NavBar'
import * as pageActions from '../actions/PageActions'
import * as userActions from '../actions/UserActions'

class App extends Component {
	componentDidMount () {
		this.props.userActions.getAuth();
	}

	render () {
		const { user } = this.props;
		const { handleLogin, handleLogout } = this.props.userActions;

		return (
			<div>
				<NavBar
					user={user.user}
					handleLogin={handleLogin}
					handleLogout={handleLogout}
					error={user.error}
				/>

				{this.props.children}
			</div>
		);
	}
}

function mapStateToProps (state) {
	return {
		user: state.user,
		page: state.page
	}
}

function mapDispatchToProps (dispatch) {
	return {
		pageActions: bindActionCreators(pageActions, dispatch),
		userActions: bindActionCreators(userActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
