import PropTypes from 'prop-types'
// you may need to install `yarn add prop-types`

type aboutProps = {
	styleNames: string,
}

const About = ( { styleNames } : aboutProps ) => {
	return (
		<div className={`${styleNames}`}>
			<h2>About</h2>
			{/* add your code here  */}

		</div>
	)
}

About.propTypes = {
	styleNames: PropTypes.string.isRequired
}

export default About
