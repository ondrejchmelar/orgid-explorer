import React from 'react';
import { formatDistance } from 'date-fns';
import styles from './styles.module.css';

const InvalidOrgId = ({ id }) => (
  <div className="align-self-center text-center">
    <h3>ORG.ID {id} not found</h3>
    <h4>
      IF you just cretead an new ORG.ID, have in mind that scraping task is scheduled at 
      2am and 2pm GMT.
    </h4>
  </div>
)

const MainDescription = ({ directory, id, created, updated, environment, lifDepositValue }) => {
  if (!created) return <InvalidOrgId id={id} />
  const baseDate = new Date();
  const directories = directory.split(',');
  return (
  <div className="align-self-center text-center">
    <h3>ORG.ID in {
      directories.map((directory, i) => {
        if (!i) return directory;
        return `, ${directory}`;
      })
    }{
      directories.length > 1 ? ' directories' : ' directory'
    }
    </h3>
    <h2 className={`${styles['dont-break-out']}`}>{id}</h2>
    <p>Created in {environment} {formatDistance(new Date(created), baseDate)} ago, updated {formatDistance(new Date(updated), baseDate)} ago</p>
    <h3>Líf deposit value: {lifDepositValue}</h3>
  </div>
)};

export default MainDescription;
