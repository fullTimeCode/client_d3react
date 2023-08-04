import PropTypes from 'prop-types'
// you may need to install `yarn add prop-types`

type footerProps = {
	styleNames: string,
}

const Footer = ( { styleNames } : footerProps ) => {
	return (
		<footer className={`${styleNames}`}>
			<h2>Footer</h2>
			{/* add your code here  */}

		</footer>
	)
}

Footer.propTypes = {
	styleNames: PropTypes.string.isRequired
}

export default Footer
