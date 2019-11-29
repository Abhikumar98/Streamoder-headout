import React from 'react';
import search from '../assets/search.png';
import styled from 'styled-components';

const Input = styled.input`
	outline: none;
	border: none;
	background: transparent;
	height: 1.6rem;
	margin: 1rem;
`;

const SearchContainer = styled.div`
	border: 1px solid grey;
	padding: 1rem;
	display: flex;
	border-radius: 20px 10px 10px 20px;
	height: 2rem;
	align-items: center;
	padding: 0 0.5rem;
	grid-row: 2/3;
	grid-column: 3/6;
	justify-content: space-between;
	:focus-within {
		grid-column: 2/6;
		transition: all 300ms ease-in-out;
	}
`;

const SearchButton = styled.button`
	outline: none;
	background: transparent;
	border: 1px solid grey;
	border-radius: 5px;
	height: 1.9rem;
	font-size: 1.2rem;
`;

export const SearchBar = () => {
	return (
		<SearchContainer>
			<div style={{ display: 'flex' }}>
				<img
					style={{ height: '1rem', alignSelf: 'center' }}
					src={search}
					alt="searchIcon"
				/>
				<Input type="text" placeholder="Search" />
			</div>
			<SearchButton>Search</SearchButton>
		</SearchContainer>
	);
};
