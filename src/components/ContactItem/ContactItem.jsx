import { MyButton, MyLi } from './ContactItem.styled';
import PropTypes from 'prop-types';

export const ContactItem = ({ id, name, phone, deleteContact }) => {
	return (
		<MyLi>
			{name}: {phone}
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
	phone: PropTypes.string.isRequired,
	deleteContact: PropTypes.func.isRequired,
};
