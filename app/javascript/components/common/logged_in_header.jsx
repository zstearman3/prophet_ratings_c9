import React from "react"
import ProphetLogo from 'images/prophet_logo.png'

class Header extends React.Component {
  render () {
    return (
      <div className="header">
        <img src={ProphetLogo} />
        <h1>
          Welcome
        </h1>
      </div>
    );
  }
}

export default Header
