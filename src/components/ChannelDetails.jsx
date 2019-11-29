import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Views from './Views';
import ChannelImage from './ChannelImage';
import Subscribers from './Subscribers';

const VideoName = styled.div`
	font-size: 1.5rem;
`;
const VideoWrapper = styled.div`
	margin: 0.5rem;
`;

const ChannelName = styled.div``;
const SusbscribeButton = styled.button``;

const ChannelDetails = ({ videoData }) => {
	const [subscribeValue, setSubscribeValue] = useState(false);

	const {
		channelName,
		videoName,
		views,
		subscribers,
		channelImage
	} = videoData;

	console.log(channelImage);

	return (
		<VideoWrapper>
			<VideoName>{videoName}</VideoName>
			<Views>{views}</Views>
			<br />
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<ChannelImage url={channelImage} />
				<div>
					<ChannelName>{channelName}</ChannelName>
					<div style={{ display: 'flex' }}>
						<Subscribers>{subscribers}</Subscribers>
					</div>
				</div>
			</div>
			<SusbscribeButton>{subscribeValue}</SusbscribeButton>
		</VideoWrapper>
	);
};

export default ChannelDetails;
