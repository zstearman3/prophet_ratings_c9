/* Table is a resuable component that takes cols, data, and extra_classes arguements
   cols (array of Column objects)
      Column - object with the following fields
        value (string) - the name of the column - Required
        sortable (bool) - defaults to true - optional
        filterable (bool) - defaults to true - optional
   data (array of Record objects)
      Record (object of Field objects) - key for each object is required to match the column name
      Field (object) - onject with the following fields
        value (any) - the value to be displayed in the cell - required
        sortValue (any) - the value which to sort by if not value - optional
        url (string) - href value if the cell should be formatted as a link
        extraClasses (string) - classes to be given to cell
   extraClasses (string) - CSS classes to be given to table
   sortable (bool) - defaults to true - optional
   filterable (bool) - defaults to false - optional
*/

import React from "react"
import TableRow from "./table_row"
import TableFilter from "./table_filter"

const Table = ({cols, data, extraClasses, sortable, filterable}) => {
  const [sortConfig, setSortConfig] = React.useState(null);
  const [filterConfig, setFilterConfig] = React.useState(null);

  const handleFilterChange = filters => {
    setFilterConfig(filters);
  }

  const requestSort = key => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  }

  const getClassNamesFor = col => {
    if (!sortConfig){
      return;
    }
    return sortConfig.key === col.value ? sortConfig.direction : undefined;
  }

  let filteredData = React.useMemo(() => {
    let filteredData = [...data]
    if (filterable && filterConfig) {
      filterConfig.forEach( filter => {
        switch (filter.operator) {
          case '>':
            return (filteredData = filteredData.filter(record => record[filter.col].value > filter.value))
          case '<':
            return (filteredData = filteredData.filter(record => record[filter.col].value < filter.value))
      }})
    }
    return filteredData
  }, [data, filterConfig]);

  let sortedData = React.useMemo(() => {
    let sortedData = filteredData
    if (sortConfig !== null) {
      let sortAttribute = sortedData[0][sortConfig.key].sortValue ? "sortValue" : "value"
      sortedData.sort((a, b) => {
        if (a[sortConfig.key][sortAttribute] < b[sortConfig.key][sortAttribute]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key][sortAttribute] > b[sortConfig.key][sortAttribute]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortedData;
  }, [data, sortConfig]);


  return (
    <div className="table-container">
      { filterable ? <TableFilter filterCallback={handleFilterChange} /> : null }
      <table className={`table ${extraClasses}`}>
        <thead>
          <tr>
            {cols.map((column, index) => {
              if (column.sortable === false){
                return <th key={index}>{column.value}</th>
              } else {
                return(
                  <th key={index}>
                    <button
                      type="button"
                      onClick={() => requestSort(column.value)}
                      className={getClassNamesFor(column)}
                    >
                      {column.value}
                    </button>
                  </th>
                )
              }
            })}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <TableRow
              cols={cols}
              item={item}
              key={item["key"]}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

Table.defaultProps = {
  sortable: "true",
  filterable: "false"
}

export default Table