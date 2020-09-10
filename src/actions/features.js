// import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_FEATURE
export const addFeature = (feature) => ({
  type: 'ADD_FEATURE',
  feature
});

export const startAddFeature = (featureData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      name = '',
      amount = 0,
      createdAt = 0
    } = featureData;
    const feature = { description, name, amount, createdAt }
    database.ref('features').push(feature).then((ref) => {
      dispatch(addFeature({
        id: ref.key,
        ...feature
      }));
    })
  }
}

// REMOVE_FEATURE
export const removeFeature = ({ id } = {}) => ({
  type: 'REMOVE_FEATURE',
  id
});

export const startRemoveFeature = ({ id } = {}) => {
  return (dispatch) => {
    return database.ref(`features/${id}`).remove().then(() => {
      dispatch(removeFeature({ id }));
    });
  };
};

// EDIT_FEATURE
export const editFeature = (id, updates) => ({
  type: 'EDIT_FEATURE',
  id,
  updates
});

export const setFeatures = (features) => ({
  type: 'SET_FEATURES',
  features
})

export const startSetFeatures = () => {
  return (dispatch) => {
    return database.ref('features').once('value').then((snapshot) => {
      const features = [];

      snapshot.forEach((childSnapshot) => {
        features.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setFeatures(features));
    });
  };
};
