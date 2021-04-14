import React from "react"
import Table from '../common/table'

const ScheduleBody = (props) => {
  const games = props.games;
  const columns = [{value: 'Matchup'}, {value: 'Result'}]
  const data = games.map((game, index) => {
    const away_team_name = ( game.away_team ? game.away_team.school : 'Unknown' );
    const home_team_name = ( game.home_team ? game.home_team.school : 'Unknown' );
    let result = null;
    if (game.status == "Final") {
      result = `${away_team_name} ${game.away_team_score} - ${home_team_name} ${game.home_team_score}`;
    } else {
      result = game.status;
    }
    return(
      {
        'key': game.id,
        'Matchup': { value: `${away_team_name} @ ${home_team_name}` },
        'Result' : { value: result },
      }
    )
  });

  return(
    <div className="schedule-body">
      <Table
        cols={columns}
        data={data}
        extra-classes="schedule-table"
        filterable={false}
      />
    </div>
  )
}

export default ScheduleBody