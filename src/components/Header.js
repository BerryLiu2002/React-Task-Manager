import PropTypes from 'prop-types'
import Button from "./Button"



const Header = (props) => {
  
  const onClick = () => {
    console.log('click')
  }

  return (
    <header>
        <h1>{props.owner}'s Task Tracker</h1>
        < Button color='green' text='Hello' onClick={onClick}/>
        
    </header>
  )
}

Header.defaultProps = {
    owner: 'Anonymous'
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header