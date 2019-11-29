import React, { Component } from 'react';
import styled from 'styled-components';
import arrow from '../assets/arrow.png';

const VideoCard = styled.div`
	height: 50vw;
    width: 90vw;
    margin: auto
    background: red;
    position: relative;
    `;

const NavigationButton = styled.div`
	background-image: url(${arrow});
	background-size: 1.5rem;
	background-position: center;
	height: 40px;
	width: 40px;
	position: absolute;
	top: calc(50% - 20px);
	border-radius: 50%;
	border: 2px solid black;
	background-repeat: no-repeat;
`;

const nextCard = () => console.log('next Card');
const prevCard = () => console.log('prev Card');

const Carousel = () => {
	return (
		<VideoCard>
			<NavigationButton
				onClick={prevCard}
				style={{ transform: 'scaleX(-1)' }}
			/>
			This is Carousel
			<NavigationButton onClick={nextCard} style={{ right: '0' }} />
		</VideoCard>
	);
};

export default Carousel;
