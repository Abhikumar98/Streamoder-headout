import React from 'react';
import { Navbar } from '../components/Navbar';
import BigCarousel from '../components/BigCarousel';
import RegularCarousel from '../components/RegularCarousel';

const HomePage = () => {
	return (
		<div style={{ width: '100vw', overflowX: 'hidden' }}>
			<Navbar />
			<BigCarousel tag={'Recommended for you'} />
			<BigCarousel tag={'Sports'} />
			<BigCarousel tag={'Music'} />
			<BigCarousel tag={'News'} />
			<BigCarousel tag={'Entertainment'} />
			<BigCarousel tag={'Gaming'} />
			<BigCarousel tag={'Devtional'} />
		</div>
	);
};

export default HomePage;
