import React from 'react';
import { Navbar } from '../components/Navbar';
import VideoPlayer from '../components/VideoPlayer';
import ChannelDetails from '../components/ChannelDetails';
import RecommendedVideos from '../components/RecommendedVideos';

const VideoPage = props => {
	return (
		<>
			<Navbar />
			<VideoPlayer props={props} />
			<ChannelDetails />
			<RecommendedVideos />
		</>
	);
};

export default VideoPage;
