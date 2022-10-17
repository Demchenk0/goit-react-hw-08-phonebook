import PropTypes from 'prop-types';
import { SectionTag, SectionText } from './Section.styled';

export const Section = ({ title, children }) => {
	return (
		<SectionTag>
			<SectionText>{title}</SectionText>
			{children}
		</SectionTag>
	);
};

Section.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};
