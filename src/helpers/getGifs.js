export const requestGifAPI = async (category) => {
	const keyAPI = 'ltweEHnvvm6YmRPdQ72yVPsgwNVzE4qb';
	const responseAPI = await fetch(
		`http://api.giphy.com/v1/gifs/search?q=${category}&api_key=${keyAPI}&limit=5`
	);
	const { data } = await responseAPI.json();

	const gifs = data.map((gif) => ({
		id: gif.id,
		tiitle: gif.title,
		url: gif.images.downsized_medium.url,
	}));
	console.log(gifs);
	return gifs;
};
