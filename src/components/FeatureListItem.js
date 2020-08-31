import React from 'react';

const FeatureListItem = ({ name, description, amount, createdAt }) => (
  <div>
    <h3>{name}</h3>
    <p>{amount} - {description}</p>
  </div>
);

export default FeatureListItem;
