import React from 'react';

import styled from 'styled-components';
import play from '../assets/play.svg';
import volume from '../assets/volume.svg';
import fullscreen from '../assets/full-screen.png';

const VideoPlayerCard = styled.div`
	height: 50vw;
	width: 100vw;
	position: relative;
	background-size: cover;
	background-position: center;
`;

const BottomEditBar = styled.div`
    height: 3rem;
    width: 100vw
	position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    background: linear-gradient(0deg, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%);
`;

const PlayButton = styled.img`
	height: 2rem;
	width: 2rem;
`;

const VolumeRange = styled.input``;
const VolumeButton = styled.img`
	height: 2rem;
	width: 2rem;
	display: flex;
`;

const FullscreenButton = styled.img`
	height: 1.5rem;
	width: 1.5rem;
`;

const VideoPlayer = ({ videoData }) => {
	return (
		<>
			<VideoPlayerCard
				style={{ backgroundImage: `url(${videoData.videoImage})` }}
			>
				<BottomEditBar>
					<PlayButton src={play} />
					<VolumeButton src={volume} />
					<VolumeRange type="range" min="1" max="100" />
					<FullscreenButton src={fullscreen} />
				</BottomEditBar>
			</VideoPlayerCard>
		</>
	);
};

export default VideoPlayer;
