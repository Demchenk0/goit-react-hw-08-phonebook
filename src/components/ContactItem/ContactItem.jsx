import { MyButton, MyLi } from './ContactItem.styled';

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
