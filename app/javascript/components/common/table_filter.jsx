import React from "react"
import FilterForm from "./filter_form"

const TableFilter = ({handleAddFilter, activeFilters, cols}) => {
  const [expanded, setExpanded] = React.useState(false);

  const addFilter = (newFilter) => {
    handleAddFilter(newFilter)
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
              { activeFilters.map((filter, index) => {
                return(
                  <p key={filter.col}>{`${filter.col} ${filter.operator} ${filter.value}`}</p>
                )
              })}
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