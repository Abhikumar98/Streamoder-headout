import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createBrowserHistory } from 'history';
import Routes from './components/Routes';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import store from './redux/store';

const history = createBrowserHistory();

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Routes />
		</Router>
	</Provider>,
	document.getElementById('root')
);
