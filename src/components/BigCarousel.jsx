import React, { useState } from 'react';
import Carousel from './Carousel';
import { data } from '../misc/sampleData';
import styled from 'styled-components';
import { ReactComponent as Arrow } from '../assets/arrow.svg';

const BigCarousel = ({ tag }) => {
	const [currentIndex, setCurrentIndex] = useState(
		Math.floor(Math.random() * 9) + 0
	);

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

	const BigCarouselWrapper = styled.div`
		border-bottom: 1px solid lightgrey;
		margin: 1.5rem 0 2rem 0;
	`;

	const CatergoryName = styled.div`
		font-size: 1.2rem;
		letter-spacing: 2px;
	`;

	const Tag = styled.div`
		margin: 0 1rem;
		display: flex;
		font-size: 0.8rem;
		align-items: center;
		justify-content: space-between;
	`;

	const ShowMore = styled.div`
		display: flex;
	`;

	return (
		<BigCarouselWrapper>
			<Tag>
				<CatergoryName>{tag}</CatergoryName>
				<ShowMore style={{ display: 'flex' }}>
					<div>Show more &nbsp;</div>
					<Arrow style={{ height: '15px' }} />
				</ShowMore>
			</Tag>
			<br />
			<Carousel
				data={data}
				index={currentIndex}
				next={nextSlide}
				prev={prevSlide}
			/>
		</BigCarouselWrapper>
	);
};

export default BigCarousel;
