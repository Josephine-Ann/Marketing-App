import React from 'react';
import FeatureList from './FeatureList';
import FeatureListFilters from './FeatureListFilters';

const FeaturesPage = () => (
  <div>
    <div id="feature-list-filters">
      <FeatureListFilters />
    </div>
    <FeatureList />
  </div>
);

export default FeaturesPage;
