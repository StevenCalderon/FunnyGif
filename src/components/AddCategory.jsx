import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
	const [inputValue, setInputValue] = useState('');

	const onInputChange = ({ target }) => {
		setInputValue(target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const cleanInputValue = inputValue.trim();
		if (cleanInputValue.length <= 1)
			return alert('Agregue mas de un caracter porfavor');
		onNewCategory(cleanInputValue);
		setInputValue('');
	};

	return (
		<>
			<form onSubmit={(event) => handleSubmit(event)}>
				<input
					type="text"
					placeholder="Category"
					value={inputValue}
					onChange={onInputChange}
				/>
			</form>
		</>
	);
};
