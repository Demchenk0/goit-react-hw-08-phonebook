import { MyButton, MyLi } from './ContactItem.styled';
import PropTypes from 'prop-types';

export const ContactItem = ({ id, name, number, deleteContact }) => {
	return (
		<MyLi>
			{name}: {number}
			<MyButton
				type="button"
				onClick={() => {
					deleteContact(id);
				}}
			>
				Delete
			</MyButton>
		</MyLi>
	);
};
ContactItem.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	number: PropTypes.string.isRequired,
	deleteContact: PropTypes.func.isRequired,
};
