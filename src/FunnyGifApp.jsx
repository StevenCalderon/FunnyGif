import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const FunnyGifApp = () => {
	const [categories, setCategories] = useState([
		'Deadpool',
		'Dragon Ball',
		'Bad bunny',
	]);

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
			<h1>Funny Gifs</h1>

			<AddCategory onNewCategory={onNewCategory} />

			{categories.map((category) => (
				<GifGrid key={category} category={category} />
			))}
		</>
	);
};
