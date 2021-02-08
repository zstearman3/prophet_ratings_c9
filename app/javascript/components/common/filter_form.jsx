import React from "react"

const FilterForm = ({addFilter, cols}) => {
  const [newFilter, setNewFilter] = React.useState({
    col: "",
    operator: "",
    value: ""
  })

  const handleChange = (event) => {
    setNewFilter({
      ...newFilter,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formattedFilter = {...newFilter,
      value: parseFloat(newFilter.value)
    }
    addFilter(formattedFilter);
  }

  let columnOptions = cols.map((col) => {
    return(<option value={col} key={col}>{col}</option>)
  })

  let operatorOptions = [">", "<", "="].map((operator) => {
    return(<option value={operator} key={operator}>{operator}</option>)
  })

  return (
    <div className="filter-form-container">
      <form onSubmit={handleSubmit}>
        <select
          value={newFilter.column}
          name="col"
          onChange={handleChange}
        >
          <option key="empty"></option>
          { columnOptions }
        </select>
        <select
          value={newFilter.operator}
          name="operator"
          onChange={handleChange}
        >
          <option key="empty"></option>
          { operatorOptions }
        </select>
        <input
          type="text"
          name="value"
          placeholder="value"
          value={newFilter.value}
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Add Filter"
        />
      </form>
    </div>
  )
}

export default FilterForm