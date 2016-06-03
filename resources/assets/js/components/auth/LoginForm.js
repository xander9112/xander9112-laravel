import React, {PropTypes, Component} from 'react'
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

export default class LoginForm extends Component {
	constructor (props) {
		super(props);

		this.state = {
			formValue: {}
		}
	}

	changeForm (event, value) {
		let { formValue } = this.state;
		let name = event.target.name;
		formValue[ name ] = value;

		this.setState({
			formValue
		});
	}

	handleLogin () {
		this.props.handleLogin(this.state.formValue);
	}

	render () {
		const actions = [
			<FlatButton
				label="Отмена"
				primary={true}
				onTouchTap={::this.props.handleClose}
			/>,
			<FlatButton
				label="Войти"
				primary={true}
				keyboardFocused={true}
				onTouchTap={::this.handleLogin}
			/>
		];

		return (
			<Dialog
				title="Войти"
				actions={actions}
				modal={false}
				open={this.props.open}
				contentClassName="col s4"
				onRequestClose={::this.props.handleClose}
			>
				<TextField
					hintText="Email"
					name="email"
					type="email"
					onChange={::this.changeForm}
				/>
				<br/>
				<TextField
					hintText="Пароль"
					name="password"
					type="password"
					onChange={::this.changeForm}
				/>
			</Dialog>

		);
	}
}

LoginForm.propTypes = {
	handleLogin: PropTypes.func.isRequired,
	handleOpen:  PropTypes.func.isRequired,
	handleClose: PropTypes.func.isRequired,
	error:       PropTypes.string.isRequired
};
