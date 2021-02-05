import React from "react"
import PropTypes from 'prop-types'
import TeamHeader from './team_header'
import Table from '../common/table'

const Roster = (props) => {
  const team = props.team;
  const columns = ['#', 'Name', 'Class']
  const data = props.roster.map((player, index) => (
      {
        'key': index,
        '#': player.jersey_number,
        'Name': `${player.first_name} ${player.last_name}`,
        'Class': player.klass_name
      }
    ));
  return (
    <div className="roster-container team-container">
      <TeamHeader
        school={team.school}
        nickname={team.nickname}
      />
      <Table
        cols={columns}
        data={data}
      />
    </div>
  );
}

Roster.propTypes = {
  roster: PropTypes.array
}

export default Roster