import React from 'react';


const MainDescription = ({
  directory = 'Hotels',
  id = '0xa5ed9797ec02fe3a5af456590863d8f0fe1196a0',
  created = '3 weeks ago',
  updated = '1 year ago'
}) => (
  <div className="align-self-center text-center">
    <h4>ORG.ID in {directory} directory</h4>
    <h3>{id}</h3>
    <p>Created: {created} Updated:{updated} </p>
  </div>
);

export default MainDescription;
