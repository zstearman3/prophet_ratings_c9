import React from "react"
import ScheduleHeader from './schedule_header'
import ScheduleBody from './schedule_body'

const Schedule = (props) => {
  const date = new Date(props.date);
  const games = props.games;
  const date_string = () => {
    const day = date.getUTCDay();
    const month = date.getUTCMonth() + 1;
    const year = date.getUTCFullYear();
    return(
      `${month}/${day}/${year}`
    )
  }

  return (
    <div className="body-container schedule-container">
      <ScheduleHeader date={date_string()} />
      <ScheduleBody games={games} />
    </div>
  )
}

export default Schedule