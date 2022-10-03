import { MyLabel, MyInput } from './FilterForm.styled';
import PropTypes from 'prop-types';
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
FilterForm.propTypes = {
	onChange: PropTypes.func.isRequired,
};
