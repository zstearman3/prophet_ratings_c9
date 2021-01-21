import React from "react"
import ProphetLogo from 'images/prophet_logo_white.png'

class Header extends React.Component {
  render () {
    return (
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/">
          <img src={ProphetLogo} width="200"/>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/teams">Teams</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header
