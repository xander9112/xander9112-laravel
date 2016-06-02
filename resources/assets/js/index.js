import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Router, Route, Link, browserHistory} from 'react-router'

injectTapEventPlugin();

const store = configureStore();

import App from './containers/App'
import UserPage from './components/UserPage'

const RootElement = document.getElementById('root');

render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <Route path="/userpage" component={App}>

                    </Route>
                </Route>
            </Router>
        </MuiThemeProvider>
    </Provider>,
    RootElement
);
