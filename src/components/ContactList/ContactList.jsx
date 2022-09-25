import { ContactItem } from '../ContactItem';
import { ContList } from './ContactList.styled';

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
