import React from "react"
import moment from "moment"
import Table from '../common/table'

const ScheduleBody = (props) => {
  const games = props.games;
  const columns = [
    {value: 'Away Team'},
    {value: 'Home Team'},
    {value: 'Time'},
    {value: 'Result', sortable: false}
  ]
  const data = games.map((game, index) => {
    const away_team_name = ( game.away_team ? game.away_team.school : 'Unknown' );
    const away_team_url = ( game.away_team ? `/teams/${game.away_team.school}/roster` : null);
    const home_team_name = ( game.home_team ? game.home_team.school : 'Unknown' );
    const home_team_url = ( game.home_team ? `/teams/${game.home_team.school}/roster` : null);
    const datetime = moment(game.date);
    const game_time = datetime.utc().local().format('hh:mm A');
    const full_game_time = datetime.valueOf();
    let result = null;
    if (game.status == "Final") {
      result = `${away_team_name} ${game.away_team_score} - ${home_team_name} ${game.home_team_score}`;
    } else {
      result = game.status;
    }
    return(
      {
        'key': game.id,
        'Away Team': { value: away_team_name, url: away_team_url},
        'Home Team': { value: home_team_name, url: home_team_url},
        'Time': {value: game_time, sortValue: full_game_time},
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