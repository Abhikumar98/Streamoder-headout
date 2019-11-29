import React from 'react';
import { data } from '../misc/sampleData';

const VideoPlayer = props => {
	const videoId = props.props.location.pathname.split('/')[2];
	const videoData = data.find(video => video.id === videoId);
	console.log(videoData);
	return <div>Video Player</div>;
};

export default VideoPlayer;
