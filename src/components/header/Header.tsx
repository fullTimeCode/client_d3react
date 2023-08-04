import PropTypes from 'prop-types'
// you may need to install `yarn add prop-types`

type headerProps = {
	styleNames: string,
}

const Header = ( { styleNames } : headerProps ) => {
	return (
		<header className={`${styleNames}`}>
			<h2>Header</h2>
			{/* add your code here  */}

		</header>
	)
}

Header.propTypes = {
	styleNames: PropTypes.string.isRequired
}

export default Header
