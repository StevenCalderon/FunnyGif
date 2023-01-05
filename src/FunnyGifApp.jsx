import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const FunnyGifApp = () => {
	const [categories, setCategories] = useState(['Hacker', 'Meme', 'Deadpool']);

	const validateNewCategory = (newCategory) => {
		const lowerCaseCategories = categories.map((category) => {
			return category.toLowerCase();
		});
		const lowerCaseNewCategory = newCategory.toLowerCase();
		if (lowerCaseCategories.includes(lowerCaseNewCategory))
			return alert(
				'Categoria Repetida no se puede agregar \n Se toma en cuenta las Mayusculas y Minusculas como iguales'
			);
		return true;
	};

	const onNewCategory = (newCategory) => {
		if (validateNewCategory(newCategory) === true)
			setCategories([newCategory, ...categories]);
	};

	return (
		<>
			<h2>Funny Gifs</h2>

			<AddCategory onNewCategory={onNewCategory} />

			{categories.map((category) => (
				<GifGrid key={category} category={category} />
			))}
		</>
	);
};
