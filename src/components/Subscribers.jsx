import React from 'react';
import styled from 'styled-components';

const SubscriberWrapper = styled.div`
	color: red;
`;

const Subscribers = ({ children }) => {
	return <SubscriberWrapper>{children} subscribers</SubscriberWrapper>;
};

export default Subscribers;
