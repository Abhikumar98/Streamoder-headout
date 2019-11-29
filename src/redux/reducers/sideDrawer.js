import { OPEN_SIDE_DRAWER, CLOSE_SIDE_DRAWER } from '../actionTypes';

const initialState = {
	sideDrawerOpen: false
};

const sideDrawer = (state = initialState, action) => {
	switch (action.types) {
		case OPEN_SIDE_DRAWER:
			console.log('came here');
			return { sideDrawerOpen: true };
		case CLOSE_SIDE_DRAWER:
			return { sideDrawerOpen: false };
		default:
			return state;
	}
};

export default sideDrawer;
