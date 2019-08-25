import React from 'react';

const Loader = ({ block, label }) => {
  if (block && label) {
    return (
      <div className="loader" style={{ height: block, opacity: 1 }}>
        <div>
          <i className="mdi mdi-loading mdi-36px" />
          <p>{label}</p>
        </div>
      </div>
    );
  } if (block) {
    return (
      <div className="loader" style={{ height: block, opacity: 1 }}>
        <i className="mdi mdi-loading mdi-36px" />
      </div>
    );
  } if (label) {
    return (
      <span>
        <i className="mdi mdi-loading mdi-36px mdi-spin text-primary" />
        {' '}
        {label}
      </span>
    );
  }
  return (<i className="mdi mdi-loading mdi-36px mdi-spin text-primary" />);
};

export default Loader;
