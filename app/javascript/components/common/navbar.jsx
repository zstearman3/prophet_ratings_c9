import React from "react"
import NavLink from "./nav_link"

const Navbar = (props) => {
  const loggedIn = props.loggedIn;

  const navLinks = () => {
    if (loggedIn) {
      return(
        <ul className="navbar-nav">
          <NavLink title = "Teams" url="/teams" />
          <NavLink title="Schedule" url="/schedule" />
        </ul>
      )
    } else {
      return(
        <ul className="navbar-nav">
          <NavLink title = "Log In" url="/login" />
        </ul>
      )
    }
  }

  return(
    <div className="collapse navbar-collapse" id="navbarNav">
      { navLinks() }
    </div>
  )
}

export default Navbar