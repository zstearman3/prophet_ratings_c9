import React from "react"

const TableRow = ({cols, item}) => {
  return (
    <tr key={item["key"]}>
      {cols.map((col, index) => {
        if (item[col.value].url){
          return(
            <td key={index} className={item["extraClasses"]}>
              <a href={item[col.value].url}>{item[col.value].value}</a>
            </td>
          )
        } else {
          return(
            <td key={index}>{item[col.value].value}</td>
          )
        }
      })}
    </tr>
  )
}

export default TableRow