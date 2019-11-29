import React, { useState } from 'react';
import Carousel from './Carousel';
import { data } from '../misc/sampleData';
console.log(data);

const BigCarousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		const lastIndex = data.length - 1;
		currentIndex === 0
			? setCurrentIndex(lastIndex)
			: setCurrentIndex(state => (state -= 1));
	};

	const nextSlide = () => {
		const lastIndex = data.length - 1;
		currentIndex === lastIndex
			? setCurrentIndex(0)
			: setCurrentIndex(state => (state += 1));
	};

	console.log(currentIndex);
	return (
		<>
			<h4>Recommended for you </h4>
			<Carousel
				data={data}
				index={currentIndex}
				next={nextSlide}
				prev={prevSlide}
			/>
		</>
	);
};

export default BigCarousel;
