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
  },
  contact,
  id,
  environment,
}) => (
  <Container className="mt-2">
    <h2>Owner</h2>
    <p>{name}</p>
    <p>{road} {houseNumber} {city} {countryCode}</p>
    {id ?
      <p>
        <a 
          href={`https://${environment === 'madrid' ? 'ropsten.' : ''}etherscan.io/address/${id}`}
          className={`btn-link ${styles['dont-break-out']}`}
          target="_blank"
          rel="noopener noreferrer"
          >
          {id}
        </a>
      </p> 
      : null
    }
    {Object.entries(contact).map(([k, v]) => (
        <p key={k}><strong>{k}: </strong> {v}</p>
    ))}
  </Container>
);

export default Owner;

