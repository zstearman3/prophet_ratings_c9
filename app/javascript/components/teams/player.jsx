import React from "react"
import PropTypes from "prop-types"

class Player extends React.Component {

  render () {
    return(
      <tr>
        <td>{this.props.number}</td>
        <td>{this.props.first_name} {this.props.last_name}</td>
        <td>{this.props.klass}</td>
      </tr>
    );
  }
}

Player.propTypes = {
  number: PropTypes.integer,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  klass: PropTypes.string
}

export default Player