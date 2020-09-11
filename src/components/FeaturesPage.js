import React from 'react';
import FeatureList from './FeatureList';
import FeatureListFilters from './FeatureListFilters';

const FeaturesPage = () => (
  <div>
    <FeatureListFilters />
    <FeatureList />
  </div>
);

export default FeaturesPage;
