import React from 'react';

const InvalidOrgId = ({ id }) => (
  <div className="align-self-center text-center">
    <h3>ORG.ID {id} not found</h3>
    <h4>
      IF you just cretead an new ORG.ID, have in mind that scraping task is scheduled at 
      2am and 2pm GMT.
    </h4>
  </div>
)

const MainDescription = ({ directory, id, created, updated }) => {
  if (!created) return <InvalidOrgId id={id} />
  return (
  <div className="align-self-center text-center">
    <h4>ORG.ID in {directory} directory</h4>
    <h3>{id}</h3>
    <p>Created: {created} Updated:{updated} </p>
  </div>
)};

export default MainDescription;
