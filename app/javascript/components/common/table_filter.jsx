import React from "react"
import FilterForm from "./filter_form"

const TableFilter = ({handleAddFilter, activeFilters, cols}) => {
  const [expanded, setExpanded] = React.useState(false);

  const addFilter = (newFilter) => {
    handleAddFilter(newFilter)
  }

  const removeFilter = filterKey => {
    console.log(filterKey)
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
            <table className="filters-table">
              <tbody>
                { activeFilters.map((filter, index) => {
                  return(
                    <tr key={filter.key}>
                      <td>{filter.col}</td>
                      <td>{filter.operator}</td>
                      <td>{filter.value}</td>
                      <td><button
                            type="button"
                            onClick={() => removeFilter(filter.key)}
                            className="remove-filter-button"
                          >Remove
                          </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
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