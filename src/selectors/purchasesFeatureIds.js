export default (features, purchases) => {
    // get all of the featureIds from purchases
    let featureIds = purchases.map(x => x.featureId);
    // go through each featureId and look for it in features
    let finalItems = []
    featureIds.forEach((x) => {
        finalItems.push(features.find(feature => feature.id === x).id);
    });
    return finalItems
    // return feature name and price
}