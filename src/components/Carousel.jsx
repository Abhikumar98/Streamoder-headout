import React from 'react';
import styled from 'styled-components';
import arrow from '../assets/arrow.png';
import testImg from '../assets/images/image1.jpg';

const CarouselWrapper = styled.div`
	height: 70vw;
	width: 100vw;
	margin: auto;
`;

const VideoCard = styled.div`
	height: 70%;
	background: red;
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
	top: calc(50% - 20px);
	border-radius: 50%;
	border: 2px solid black;
	background-repeat: no-repeat;
	margin: 1rem;
`;

const Details = styled.div`
	height: 30%;
	display: flex;
	align-items: center;
`;

const ChannelImage = styled.div`
	border-radius: 50%;
	height: 60px;
	width: 60px;
	border: 1px solid black;
	background-size: cover;
	background-position: center;
	margin: 1rem;
`;

const VideoName = styled.div`
	font-size: 1.3rem;
`;
const ChannelName = styled.div`
	display: flex;
	justify-content: space-between;
`;
const Views = styled.div`
	font-size: 0.9rem;
	color: grey;
	display: flex;
	justify-content: space-between;
`;

const Subscribers = styled.div`
	color: red;
`;

const DateUploaded = styled.div`
	color: darkgrey;
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
				// style={{ backgroundImage: `url(${data[index].videoImage})` }}
				style={{ backgroundImage: `url(${testImg})` }}
			>
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
				<ChannelImage
					// style={{
					// 	backgroundImage: `url(${testImg})`
					// }}
					style={{
						backgroundImage: `url(${data[index].channelImage})`
					}}
				/>
				<div style={{ width: '75%' }}>
					<VideoName>{videoNameTrim()}</VideoName>
					<ChannelName>
						{data[index].channelName}
						<Subscribers>{data[index].subscribers}</Subscribers>
					</ChannelName>
					<Views>
						{data[index].views} views
						<DateUploaded>
							{data[index].dateUploaded} ago
						</DateUploaded>
					</Views>
				</div>
			</Details>
		</CarouselWrapper>
	);
};

export default Carousel;
