import uuid from 'uuid';

// ADD_EXPENSE
export const addFeature = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_FEATURE',
  expense: {
    id: uuid(),
    description,
    note,
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
