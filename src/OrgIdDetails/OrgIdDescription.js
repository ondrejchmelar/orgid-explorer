import React from 'react';
import { Container } from '@windingtree/wt-ui-react';


const WebesiteLink = ({ url }) => (
  url ? <a href={`${url}`} className='btn-link' target='_blank' rel="noopener noreferrer">{url}</a> 
  : <p>Website not provided</p>
);

const OrgIdDescription = ({ orgData, name }) => {
  const { address, city, countryCode, website, description } = orgData;

  if(description) {
    return (
      <Container className="my-1">
        <h2>{description.name}</h2>
        <p>{description.address.line1} {description.address.line2}</p>
        <p> {description.address.city} {description.address.state} {description.address.countryCode}</p>

        {<WebesiteLink url={`${website}`} />}
      </Container>
    );
  }
    return ( 
      <Container className="my-1">
        <h2>{name}</h2>
        {address || city || countryCode ? (<p>{address} {city} {countryCode}</p>) :<p>Address not provided</p>}
        {<WebesiteLink url={website} />}
      </Container>
      );
};

export default OrgIdDescription;
