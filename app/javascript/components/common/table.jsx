/* Table is a resuable component that takes cols, data, and extra_classes arguements
   cols = Array (array of column names to be displayed in the table. Optionally a column can
                 be an object with value=column_name and sortable:false to not let sorting occur on column)
   data = Array (array of objects. Objects will use the col string values as their keys. Optionally,
                a value can be an object with a value and sortValue key. This lets the sorting be done
                by the sortValue instead of by the value.)
   extra_classes = String (css classes to be added to table)
*/

import React from "react"

const Table = ({cols, data, extra_classes}) => {
  const [sortConfig, setSortConfig] = React.useState(null);

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
    return sortConfig.key === col ? sortConfig.direction : undefined;
  }

  let sortedData = React.useMemo(() => {
    let sortedData = [...data]
    if (sortConfig !== null) {
      if (typeof sortedData[0][sortConfig.key] !== "object") {
        sortedData.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
          return 0;
        });
      } else {
        sortedData.sort((a, b) => {
          if (a[sortConfig.key].sortValue < b[sortConfig.key].sortValue) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if (a[sortConfig.key].sortValue > b[sortConfig.key].sortValue) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
          return 0;
        });
      }
    }
    return sortedData;
  }, [data, sortConfig]);

  return (
    <table className={`table ${extra_classes}`}>
      <thead>
        <tr>
          {cols.map((column, index) => {
            if (typeof column === "object" && column.sortable === false){
              return <th key={index}>{column.value}</th>
            } else {
              return(
                <th key={index}>
                  <button
                    type="button"
                    onClick={() => requestSort(column)}
                    className={getClassNamesFor(column)}
                  >
                    {column}
                  </button>
                </th>
              )
            }
          })}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((item, index) => (
          <tr key={index}>
            {cols.map((key, index) => {
              const new_key = (typeof(key) === "object") ? key.value : key
              return(
                <td key={index}>
                  { (typeof item[new_key] === "object") ? item[new_key].value : item[new_key] }
                </td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table