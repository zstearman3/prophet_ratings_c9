import React from "react"
import moment from "moment"
import ScheduleHeader from './schedule_header'
import ScheduleBody from './schedule_body'

const Schedule = (props) => {
  const date = moment(props.date);
  const games = props.games;
  const date_string = moment(date).format('MM/DD/YYYY');

  return (
    <div className="body-container schedule-container">
      <ScheduleHeader date={date_string} />
      <ScheduleBody games={games} />
    </div>
  )
}

export default Schedule