import React from 'react';

const Table = () => {
  return (
    <table aria-label="Data Table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Item 1</td>
          <td>100</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
