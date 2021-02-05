import React from "react"
import PropTypes from 'prop-types'
import TeamHeader from './team_header'
import RosterTable from './roster_table'

class Roster extends React.Component {
  render () {
    var team = this.props.team;
    return (
      <div className="roster-container team-container">
        <TeamHeader
          school={team.school}
          nickname={team.nickname}
        />
        <RosterTable
          roster={this.props.roster}
        />
      </div>
    );
  }
}

Roster.propTypes = {
  roster: PropTypes.array
}

export default Roster