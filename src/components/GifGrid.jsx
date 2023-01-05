import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export function GifGrid({ category }) {
	const { images, isLoading } = useFetchGifs(category);
	return (
		<>
			<h3>{category}</h3>
			{isLoading && <h4>Cargando ...</h4>} {/* Es un and ternario */}
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
