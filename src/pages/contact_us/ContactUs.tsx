import PropTypes from 'prop-types'
// you may need to install `yarn add prop-types`

type contactUsProps = {
	styleNames: string,
}

const ContactUs = ( { styleNames } : contactUsProps ) => {
	return (
		<div className={`${styleNames}`}>
			<h2>ContactUs</h2>
			{/* add your code here  */}

		</div>
	)
}

ContactUs.propTypes = {
	styleNames: PropTypes.string.isRequired
}

export default ContactUs
