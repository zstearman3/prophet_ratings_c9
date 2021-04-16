import React from "react"

const NavLink = (props) => {
  const url = props.url;
  const title = props.title;

  return(
    <li className="nav-item">
      <a className="nav-link" href={props.url}>{props.title}</a>
    </li>
  )
}

export default NavLink