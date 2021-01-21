import React from "react"
import PropTypes from "prop-types"
import ProphetLogo from 'images/prophet_logo.png'

class Header extends React.Component {
  render () {
    return (
      <div className="header">
        <img src={ProphetLogo} />
        <h1>
          Logged in?: {this.props.logged_in}
        </h1>
      </div>
    );
  }
}

Header.propTypes = {
  logged_in: PropTypes.string
};

export default Header
