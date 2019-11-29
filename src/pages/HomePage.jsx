import React from 'react';
import { Navbar } from '../components/Navbar';
import BigCarousel from '../components/BigCarousel';

const HomePage = () => {
	return (
		<div style={{ width: '100vw', overflowX: 'hidden' }}>
			<Navbar />
			<BigCarousel />
		</div>
	);
};

export default HomePage;
