import React from "react"
import FilterForm from "./filter_form"

const TableFilter = ({filterCallback, cols}) => {
  const [activeFilters, setActiveFilters] = React.useState([]);
  const [expanded, setExpanded] = React.useState(false);

  let buttonText = expanded ? '-' : '+'

  const addFilter = filter => {
    let filters = [...activeFilters].push(filter)
    setActiveFilters(filters)
  }

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
              addFilterCallback={addFilter}
              cols={cols}
            />
          </div>
        )
      }
    </div>
  )
}

export default TableFilter