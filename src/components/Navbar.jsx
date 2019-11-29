import React from 'react';
import { Logo } from './Logo';
import { SearchBar } from './Searchbar';
import { UploadIcon, NotificationIcon, Profile } from './icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MenuIcon } from './icons';
import { useDispatch } from 'react-redux';
import { openSideDrawer } from '../redux/actions';
import { OPEN_SIDE_DRAWER } from '../redux/actionTypes';

const NavbarContainer = styled.div`
	display: grid;
	grid-template-columns: 3rem 1fr 3rem 3rem 3rem;
	grid-template-row: 3rem 3rem 3rem;
	grid-gap: 1rem;
	align-items: center;
`;

export const Navbar = () => {
	const dispatch = useDispatch();
	const toggleMenu = () => {
		console.log('clicked');
		dispatch(openSideDrawer());
	};
	return (
		<>
			<NavbarContainer>
				<div onClick={toggleMenu}>
					<MenuIcon />
				</div>
				<Link to="/">
					<Logo />
				</Link>
				<UploadIcon />
				<NotificationIcon />
				<Profile />
				<SearchBar />
			</NavbarContainer>
		</>
	);
};
