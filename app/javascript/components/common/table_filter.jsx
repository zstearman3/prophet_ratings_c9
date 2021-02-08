import React from "react"
import FilterForm from "./filter_form"

const TableFilter = ({handleFilterChange, cols}) => {
  const [expanded, setExpanded] = React.useState(false);

  const addFilter = (newFilter) => {
    handleFilterChange(newFilter)
  }

  let buttonText = expanded ? '-' : '+'

  return (
    <div className="table-filter">
      <div className="filter-button-container">
        <button onClick={() => setExpanded(!expanded)}>{buttonText}</button>
      </div>
      { expanded &&
         (
          <div className="filter-body">
            <div className="filters-container">
              Filter Row
            </div>
            <FilterForm
              addFilter={addFilter}
              cols={cols}
            />
          </div>
        )
      }
    </div>
  )
}

export default TableFilter