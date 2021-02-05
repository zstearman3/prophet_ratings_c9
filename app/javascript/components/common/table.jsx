import React from "react"

const Table = ({cols, data, extra_classes}) => {

  return (
    <table className={`table ${extra_classes}`}>
      <thead>
        <tr>
          {cols.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {cols.map((key, index) => (
              <td key={index}>{item[key]}</td>
             ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table