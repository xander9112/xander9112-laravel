import React, {PropTypes, Component} from 'react'
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import  {Link} from 'react-router';

export default class User extends Component {
    render () {
        const { user, error } = this.props;
        let template;

        let { first_name, last_name } = user;

        if (first_name) {
            template = `Привет, ${first_name} ${last_name}!`;
        } else {
            template = `Привет, Аноним!`
        }

        return (
            <AppBar
                title={template} showMenuIconButton={false}
                iconElementRight={first_name ? <FlatButton label="Выйти" onTouchTap={::this.props.handleLogout} /> : <FlatButton label="Войти" onTouchTap={::this.props.handleLogin} />}
            />
        );
    }
}

User.propTypes = {
    user:         PropTypes.object.isRequired,
    handleLogin:  PropTypes.func.isRequired,
    handleLogout: PropTypes.func.isRequired,
    error:        PropTypes.string.isRequired
};
