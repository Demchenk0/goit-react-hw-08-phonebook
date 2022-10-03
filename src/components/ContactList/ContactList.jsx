import { ContactItem } from '../ContactItem';
import { ContList } from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, deleteContact }) => {
	return (
		<ContList>
			{contacts.map(({ id, name, number }) => {
				return (
					<ContactItem
						key={id}
						id={id}
						name={name}
						number={number}
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
			number: PropTypes.string.isRequired,
		})
	).isRequired,
	deleteContact: PropTypes.func.isRequired,
};
