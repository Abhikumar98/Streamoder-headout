import React from 'react';
import styled from 'styled-components';

const ViewsWrapper = styled.div`
	font-size: 0.9rem;
	color: grey;
	display: flex;
	justify-content: space-between;
`;

const Views = ({ children }) => {
	return <ViewsWrapper>{children} views</ViewsWrapper>;
};

export default Views;
