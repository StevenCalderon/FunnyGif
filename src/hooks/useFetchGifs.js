import { useState, useEffect } from 'react';
import { requestGifAPI } from '../helpers/getGifs';

//hook personalizado
export const useFetchGifs = (category) => {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getImages = async () => {
		setImages(await requestGifAPI(category));
		setIsLoading(false);
	};

	useEffect(() => {
		getImages();
	}, []);

	return {
		images,
		isLoading,
	};
};
