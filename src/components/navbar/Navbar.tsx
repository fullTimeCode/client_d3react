import PropTypes from 'prop-types'
// you may need to install `yarn add prop-types`

type navbarProps = {
	styleNames: string,
}

const Navbar = ( { styleNames } : navbarProps ) => {
	return (
		<div className={`${styleNames}`}>
			<h2>Navbar</h2>
			{/* add your code here  */}

		</div>
	)
}

Navbar.propTypes = {
	styleNames: PropTypes.string.isRequired
}

export default Navbar
