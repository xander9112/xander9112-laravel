import React, {PropTypes, Component} from 'react'
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router';
import LoginForm from './auth/LoginForm';

export default class NavBar extends Component {
	constructor (props) {
		super(props);

		this.state = {
			dialogOpen: false,
			drawerOpen: false
		};
	}

	handleDialogOpen () {
		this.setState({ dialogOpen: true });
	}

	handleDialogClose () {
		this.setState({ dialogOpen: false });
	}

	handleDrawerOpen () {
		this.setState({ drawerOpen: true });
	}

	handleDrawerClose () {
		this.setState({ drawerOpen: false });
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
				title={template}
				showMenuIconButton={true}
				onLeftIconButtonTouchTap={::this.handleDrawerOpen}
				iconElementRight={name ? <FlatButton label="Выйти" onTouchTap={::this.props.handleLogout} /> : <FlatButton label="Войти" onTouchTap={::this.handleDialogOpen} />}
			>
				<Drawer
					docked={false}
					width={200}
					open={this.state.drawerOpen}
					onRequestChange={::this.handleDrawerClose}
				>
					<MenuItem>
						<Link to="/">Главная</Link>
					</MenuItem>
					<MenuItem>
						<Link to="tasks">Задачи</Link>
					</MenuItem>
				</Drawer>
				<LoginForm
					handleLogin={::this.props.handleLogin}
					handleOpen={::this.handleDialogOpen}
					handleClose={::this.handleDialogClose}
					error={error}
					open={this.state.dialogOpen}/>
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
