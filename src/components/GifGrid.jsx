import { useState, useEffect } from 'react';
import { GifItem } from './GifItem';
import { requestGifAPI } from '../helpers/getGifs';

export function GifGrid({ category }) {
	const [images, setImages] = useState([]);

	const getImages = async () => {
		setImages(await requestGifAPI(category));
	};

	useEffect(() => {
		getImages();
	}, []);

	//requestGifAPI(category);
	return (
		<>
			<h3>{category}</h3>

			<div className="card-grid">
				{images.map(({ id, title, url }) => (
					<GifItem key={id} title={title} url={url} />
				))}
				{/* Tambien se puede hacer asi, se usa cuando hay muchas propiedades
				 {images.map((image) => (
					<GifItem key={id} {...image} />
					lo que hace es pasar todas las propiedades de la imagen ya reccorridas
				))}
				 
				 */}
			</div>
		</>
	);
}
