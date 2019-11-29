import React from 'react';
import styled from 'styled-components';

const ChannelImageWrapper = styled.img`
	border-radius: 50%;
	height: 60px;
	width: 60px;
	border: 1px solid black;
	background-size: cover;
	background-position: center;
	margin: 1rem;
`;

const ChannelImage = ({ url }) => {
	return <ChannelImageWrapper src={url}></ChannelImageWrapper>;
};

export default ChannelImage;
