import React from "react"
import ProphetLogo from 'images/prophet_logo_white.png'

function NavLink(props) {
  return(
    <li className="nav-item">
      <a className="nav-link" href={props.url}>{props.title}</a>
    </li>
  )
}

class Header extends React.Component {
  render () {
    return (
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/">
          <img src={ProphetLogo} width="200"/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink title="Teams" url="/teams" />
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header
