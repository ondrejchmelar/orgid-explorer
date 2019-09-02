import React from 'react';
import { Container } from '@windingtree/wt-ui-react';

const Owner = ({ 
  name,
  address: {
    city,
    countryCode,
    houseNumber,
    road,
  },
  contact,
  id,
}) => (
  <Container>
    <h2>Owner:</h2>
    <p>{name}</p>
    <p>{road} {houseNumber} {city} {countryCode}</p>
    {id ? <a href={`/orgid/${id}`}>{id}</a> : null}
    {Object.entries(contact).map(([k, v]) => (
        <p key={k}>{k}: {v}</p>
    ))}
  </Container>
);

export default Owner;

