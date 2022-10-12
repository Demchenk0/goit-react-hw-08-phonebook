import { ContactItem } from '../ContactItem';
import { ContList } from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, deleteContact }) => {
	return (
		<ContList>
			{contacts.map(({ id, name, phone }) => {
				return (
					<ContactItem
						key={id}
						id={id}
						name={name}
						phone={phone}
						deleteContact={deleteContact}
					></ContactItem>
				);
			})}
		</ContList>
	);
};

ContactList.propTypes = {
	contacts: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			phone: PropTypes.string.isRequired,
		})
	).isRequired,
	deleteContact: PropTypes.func.isRequired,
};
