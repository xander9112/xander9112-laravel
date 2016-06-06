import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Router, Route, browserHistory} from 'react-router'
import $ from 'jquery';

injectTapEventPlugin();

const store = configureStore(); 

import App from './containers/App'
import Index from './containers/Tasks/Index';
import Login from './containers/Auth/Login';
import Register from './containers/Auth/Register';

$.ajaxSetup({
	headers: {
		'X-CSRF-TOKEN': window.csrf_token
	}
});

const RootElement = document.getElementById('root');

if (!!RootElement) {
	render(
		<Provider store={store}>
			<MuiThemeProvider muiTheme={getMuiTheme()}>
				<Router history={browserHistory}>
					<Route path="/" component={App}>
						<Route path="auth">
							<Route path="login" component={Login}/>
							<Route path="register" component={Register}/>
						</Route>
						<Route path="tasks" component={Index}/>
					</Route>
				</Router>
			</MuiThemeProvider>
		</Provider>,
		RootElement
	);
}
