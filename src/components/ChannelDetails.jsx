import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const VideoName = styled.div`
	font-size: 1.5rem;
`;
const VideoWrapper = styled.div`
	margin: 0.5rem;
`;
const Views = styled.div``;
const ChannelName = styled.div``;
const Subscribers = styled.div``;
const ChannelImage = styled.div``;
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

	return (
		<VideoWrapper>
			<VideoName>{videoName}</VideoName>
			<Views>{views} views</Views>
			<ChannelImage src={channelImage} />
			<ChannelName>{channelName}</ChannelName>
			<Subscribers>{subscribers}</Subscribers>
			<SusbscribeButton>{subscribeValue}</SusbscribeButton>
		</VideoWrapper>
	);
};

export default ChannelDetails;
