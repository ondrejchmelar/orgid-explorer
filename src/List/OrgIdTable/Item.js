import React from 'react';

const Item = ({ id, company, location,directory, created }) => (
  <tr>
    <td>{id}</td>
    <td>{company}</td>
    <td>{location}</td>
    <td>{directory}</td>
    <td>{created}</td>
  </tr>
);

export default Item;