export default (features, purchases) => {
    // get all of the featureIds from purchases
    let purchasesCopy = purchases
    purchasesCopy = purchasesCopy.filter(x => x.bought === true)
    if (purchasesCopy.length === 0) {
        return purchasesCopy
    } else {
        let featureIds = purchasesCopy.map(x => x.featureId);
        // go through each featureId and look for it in features
        let finalItems = []
        featureIds.forEach((x) => {
            finalItems.push(features.find(feature => feature.id === x));
        });
        return finalItems
        // return feature name and price
    }
}