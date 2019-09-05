import React from 'react';
import { Container } from '@windingtree/wt-ui-react';

const OrgIdDescription = ({ orgData, name }) => {
  const { address, city, countryCode, website, description } = orgData;

  if(description) {
    return (
      <Container className="my-1">
        <h2>{description.name}</h2>
        <p>{description.address.line1} {description.address.line2}</p>
        <p> {description.address.city} {description.address.state} {description.address.countryCode}</p>

        <a href={`${website}`}>{website}</a>
      </Container>
    );
  }
    return ( 
      <Container className="my-1">
        <h2>{name}</h2>
        {address || city || countryCode ? (<p>{address} {city} {countryCode}</p>) :<p>Address not provided</p>}
        {website ? <a href={`${website}`}>{website}</a> : <p>Website not provided</p>}
      </Container>
      );
};

export default OrgIdDescription;
