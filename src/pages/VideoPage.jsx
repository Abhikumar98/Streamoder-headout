import React from 'react';
import { Navbar } from '../components/Navbar';
import VideoPlayer from '../components/VideoPlayer';
import ChannelDetails from '../components/ChannelDetails';
import RecommendedVideos from '../components/RecommendedVideos';
import { data } from '../misc/sampleData';

const VideoPage = props => {
	const videoId = props.match.params.id;
	const videoData = data.find(video => video.id === videoId);

	return (
		<>
			<Navbar />
			<VideoPlayer videoData={videoData} />
			<ChannelDetails videoData={videoData} />
			<RecommendedVideos />
		</>
	);
};

export default VideoPage;
