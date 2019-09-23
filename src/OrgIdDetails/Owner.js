import React from 'react';
import { Container } from '@windingtree/wt-ui-react';
import styles from './styles.module.css';

const Owner = ({ 
  name,
  address: {
    city,
    countryCode,
    houseNumber,
    road,
    environment,
  },
  contact,
  id,
}) => (
  <Container>
    <h2>Owner:</h2>
    <p>{name}</p>
    <p>{road} {houseNumber} {city} {countryCode}</p>
    {id ? 
        <a 
          href={`https://${environment === 'mainnet' ? '' : 'ropsten.'}etherscan.io/address/${id}`}
          className={`btn-link ${styles['dont-break-out']}`}
          target="_blank"
          rel="noopener noreferrer"
          >
          {id}
        </a> 
      : null
    }
    {Object.entries(contact).map(([k, v]) => (
        <p key={k}>{k}: {v}</p>
    ))}
  </Container>
);

export default Owner;

