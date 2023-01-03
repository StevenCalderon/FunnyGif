import { requestGifAPI } from '../helpers/getGifs';
import { useEffect } from 'react';

export function GifGrid({ category }) {
	useEffect(() => {
		requestGifAPI(category);
	}, []);

	//requestGifAPI(category);
	return (
		<>
			<h3>{category}</h3>
			<p>Hola Mundo</p>
		</>
	);
}
