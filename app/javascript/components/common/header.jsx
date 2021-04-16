import React from "react"
import PropTypes from "prop-types"
import ProphetLogo from 'images/prophet_logo_white.png'
import Navbar from "./navbar"

const Header = (props) => {
  const isLoggedIn = props.signed_in;

  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="/">
        <img src={ProphetLogo} width="200"/>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <Navbar loggedIn={isLoggedIn} />
    </nav>
  )
}

Header.propTypes = {
  signed_in: PropTypes.bool
}

export default Header
