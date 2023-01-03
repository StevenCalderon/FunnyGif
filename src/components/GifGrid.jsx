export function GifGrid({ category }) {
	//ltweEHnvvm6YmRPdQ72yVPsgwNVzE4qb
	//[Search endpoint](/docs/api/endpoint/#search)

	const requestAPI = async () => {
		const keyAPI = 'ltweEHnvvm6YmRPdQ72yVPsgwNVzE4qb';
		const responseAPI = await fetch(
			`http://api.giphy.com/v1/gifs/search?q=${category}&api_key=${keyAPI}&limit=5`
		);
		const dataAPI = await responseAPI.json();
		return dataAPI.data;
	};

	//const arrDataAPI = requestAPI();
	//console.log(arrDataAPI);
	/*const arrImages = arrDataAPI.map((img) => {
		return img.url;
	});*/
	//console.log(arrDataAPI);

	return (
		<>
			<h3>{category}</h3>
			<p>Hola Mundo</p>
		</>
	);
}
