import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import VideoPage from '../pages/VideoPage';
import Error404 from '../pages/Error404';

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/video/:id" component={VideoPage} />
				<Route component={Error404} />
			</Switch>
		</Router>
	);
};

export default Routes;
