import React from "react"

const FilterForm = ({addFilterCallback}) => {

  const handleSubmit = () => {
    addFilterCallback('Hello');
  }

  return (
    <div className="filter-form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="column"
        />
        <input
          type="text"
          placeholder="operator"
        />
        <input
          type="text"
          placeholder="value"
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