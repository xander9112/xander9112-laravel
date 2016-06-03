import React, {PropTypes, Component} from 'react'
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
// import  {Link} from 'react-router';

import LoginForm from './auth/LoginForm';

export default class NavBar extends Component {
	constructor (props) {
		super(props);

		this.state = {
			open: false
		};
	}

	handleOpen () {
		this.setState({ open: true });
	}

	handleClose () {
		this.setState({ open: false });
	}

	render () {
		const { user, error } = this.props;
		let template;

		let { name } = user;

		if (name) {
			template = `Привет, ${name}!`;
		} else {
			template = `Привет, Аноним!`
		}

		return (
			<AppBar
				title={template} showMenuIconButton={false}
				iconElementRight={name ? <FlatButton label="Выйти" onTouchTap={::this.props.handleLogout} /> : <FlatButton label="Войти" onTouchTap={::this.handleOpen} />}
			>

				<LoginForm
					handleLogin={::this.props.handleLogin}
					handleOpen={::this.handleOpen}
					handleClose={::this.handleClose}
					error={error}
					open={this.state.open}/>
			</AppBar>
		);
	}
}

NavBar.propTypes = {
	user:         PropTypes.object.isRequired,
	handleLogin:  PropTypes.func.isRequired,
	handleLogout: PropTypes.func.isRequired,
	error:        PropTypes.string.isRequired
};
