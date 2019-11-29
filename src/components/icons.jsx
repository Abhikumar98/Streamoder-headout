import React from 'react';
import menu from '../assets/menu.png';
import upload from '../assets/upload.png';
import notification from '../assets/notification.png';
import user from '../assets/user.png';

const commonStyle = {
	height: '1.5rem',
	padding: '0.5rem'
};

export const MenuIcon = () => {
	return <img src={menu} style={commonStyle} alt="menu" />;
};

export const UploadIcon = () => {
	return (
		<img
			style={{ ...commonStyle, height: '1.7rem' }}
			src={upload}
			alt="upload Icon"
		/>
	);
};

export const NotificationIcon = () => {
	return (
		<img
			style={{ ...commonStyle, height: '1.7rem' }}
			src={notification}
			alt="notification Icon"
		/>
	);
};

export const Profile = () => {
	return (
		<img
			style={{ ...commonStyle, height: '1.7rem' }}
			src={user}
			alt="profile Icon"
		/>
	);
};
