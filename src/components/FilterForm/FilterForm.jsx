import { MyLabel, MyInput } from './FilterForm.styled';

export const FilterForm = ({ onChange }) => {
	return (
		<MyLabel>
			Find contacts by name
			<MyInput
				onChange={onChange}
				type="email"
				name="filter"
				placeholder="name"
			/>
		</MyLabel>
	);
};
