import Form from 'react-bootstrap/Form';

export const FilterForm = ({ onChange }) => {
	return (
		<Form>
			<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
				<Form.Label>Email address</Form.Label>
				<Form.Control
					onChange={onChange}
					type="email"
					name="filter"
					placeholder="name"
				/>
			</Form.Group>
		</Form>
	);
};
