import uuid from 'uuid';

// ADD_FEATURE
export const addFeature = (
  {
    description = '',
    name = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_FEATURE',
  feature: {
    id: uuid(),
    description,
    name,
    amount,
    createdAt
  }
});

// REMOVE_FEATURE
export const removeFeature = ({ id } = {}) => ({
  type: 'REMOVE_FEATURE',
  id
});

// EDIT_FEATURE
export const editFeature = (id, updates) => ({
  type: 'EDIT_FEATURE',
  id,
  updates
});
