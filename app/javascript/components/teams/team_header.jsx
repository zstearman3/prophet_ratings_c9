import React from "react"
import PropTypes from "prop-types"

class TeamHeader extends React.Component {

  render () {
    return(
      <div className="team-header">
        <h1><em>{this.props.school}</em> {this.props.nickname}</h1>
      </div>
    );
  }
}

TeamHeader.propTypes = {
  school: PropTypes.string,
  nickname: PropTypes.string
}

export default TeamHeader