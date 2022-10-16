import { MyButton, MyLi } from './ContactItem.styled';
// import { useState } from 'react';

import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';
// import { getIsLoading } from 'redux/Contacts/contactSelector';

export const ContactItem = ({ id, name, number, deleteContact }) => {
	// const [isLocalLoading, setIsLocalLoading] = useState(false);
	// const isLoading = useSelector(getIsLoading);
	return (
		<MyLi>
			{name}: {number}
			<MyButton
				type="button"
				onClick={() => {
					deleteContact(id);
					// setIsLocalLoading(true);
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
