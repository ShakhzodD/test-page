import React from "react";

const Table = ({ filmsInfoTable }) => {
  return (
    <table className="table">
      <tbody>
        {filmsInfoTable.map((item, idx) => (
          <tr key={idx}>
            <td>{item.title}</td>
            <td>{item.language}</td>
            <td>{item.year}</td>
            <td>{item.genres}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;
