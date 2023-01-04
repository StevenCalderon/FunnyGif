export const requestGifAPI = async (category) => {
	const keyAPI = 'ltweEHnvvm6YmRPdQ72yVPsgwNVzE4qb';
	const responseAPI = await fetch(
		`http://api.giphy.com/v1/gifs/search?q=${category}&api_key=${keyAPI}&limit=8`
	);
	const { data } = await responseAPI.json();

	const gifs = data.map((gif) => ({
		id: gif.id,
		title: gif.title,
		url: gif.images.downsized_medium.url,
	}));
	return gifs;
};
