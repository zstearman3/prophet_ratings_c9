import React from "react"
import Player from "./player"

class RosterTable extends React.Component {

  render () {
    var roster = this.props.roster;
    return(
      <table className="table roster-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Player</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          {roster.map((player, index) =>
            <Player
              number={player.jersey_number}
              first_name={player.first_name}
              last_name={player.last_name}
              klass={player.klass_name}
              key={index}
              index={index}
            />
          )}
        </tbody>
      </table>
    );
  }
}

export default RosterTable