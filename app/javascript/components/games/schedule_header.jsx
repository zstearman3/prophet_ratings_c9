import React from "react"

const ScheduleHeader = (props) => {
  const date = props.date;

  return (
    <div className = "schedule-header">
      <h1>NCAA Schedule</h1>
      <h4>{date}</h4>
    </div>
  )
}

export default ScheduleHeader