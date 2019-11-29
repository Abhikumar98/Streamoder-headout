import { combineReducers } from 'redux';

// reducers
import sideDrawer from './sideDrawer';

export default combineReducers({
	drawer: sideDrawer
});
