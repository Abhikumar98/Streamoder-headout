import React from 'react';
import styled from 'styled-components';
import arrow from '../assets/arrow.png';
import play from '../assets/play.svg';
import { Link } from 'react-router-dom';
import Views from './Views';
import Subscribers from './Subscribers';
import ChannelImage from './ChannelImage';

const CarouselWrapper = styled.div`
	height: 70vw;
	width: 100vw;
	margin: auto;
`;

const VideoCard = styled.div`
	height: 70%;
	position: relative;
	background-size: cover;
	background-position: center;
`;

const NavigationButton = styled.div`
	background-image: url(${arrow});
	background-size: 1.5rem;
	background-position: center;
	height: 40px;
	width: 40px;
	position: absolute;
	top: calc(50% - 30px);
	border-radius: 50%;
	border: 2px solid black;
	background-repeat: no-repeat;
	margin: 1rem;
	background-color: lightgrey;
	opacity: 0.6;
`;

const Details = styled.div`
	height: 30%;
	display: flex;
	align-items: center;
`;

const VideoName = styled.div`
	font-size: 1rem;
`;
const ChannelName = styled.div`
	display: flex;
	font-size: 0.7rem;
	justify-content: space-between;
`;
const ViewsAndDate = styled.div`
	display: flex;
	justify-content: space-between;
`;

const DateUploaded = styled.div`
	color: darkgrey;
`;

const Play = styled.img`
	position: absolute;
	top: 50%;
	left: 50%;
	height: 5rem;
	transform: translate(-50%, -50%);
	background-color: lightgrey;
	border-radius: 50%;
	opacity: 0.5;
`;

const Carousel = ({ data, index, next, prev }) => {
	const videoNameTrim = () => {
		const name = data[index].videoName;
		const trimmedName =
			name.length > 30 ? name.substring(0, 28) + '...' : name;
		return trimmedName;
	};

	return (
		<CarouselWrapper>
			<VideoCard
				style={{ backgroundImage: `url(${data[index].videoImage})` }}
			>
				<Link to={`/video/${data[index].id}`}>
					<Play src={play} alt="Play button" />
				</Link>
				<NavigationButton
					onClick={() => prev()}
					style={{ transform: 'scaleX(-1)' }}
				/>
				<NavigationButton
					onClick={() => next()}
					style={{ right: '0' }}
				/>
			</VideoCard>
			<Details>
				<ChannelImage url={data[index].channelImage} />
				<div style={{ width: '75%' }}>
					<VideoName>{videoNameTrim()}</VideoName>
					<ChannelName>
						{data[index].channelName}
						<Subscribers>{data[index].subscribers}</Subscribers>
					</ChannelName>

					<ViewsAndDate>
						<Views>{data[index].views}</Views>
						<DateUploaded>
							{data[index].dateUploaded} ago
						</DateUploaded>
					</ViewsAndDate>
				</div>
			</Details>
		</CarouselWrapper>
	);
};

export default Carousel;
