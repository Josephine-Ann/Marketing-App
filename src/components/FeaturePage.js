import React from 'react';

const FeaturePage = (props) => {
  console.log(props);
  return (
    <div>
      Looking at the feature with id of {props.match.params.id}
    </div>
  );
};

export default FeaturePage;
