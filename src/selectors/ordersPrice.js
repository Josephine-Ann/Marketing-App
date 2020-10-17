export default (features, purchases) => {
    // get all of the featureIds from purchases
    let purchasesNotBought = purchases.filter(x => x.bought === true)
    let featureIds = purchasesNotBought.map(x => x.featureId);
    // go through each featureId and look for it in features
    let finalItems = []
    featureIds.forEach((x) => {
        finalItems.push(features.find(feature => feature.id === x).amount);
    });
    return finalItems.reduce(function (a, b) { return a + b; }, 0);
    // return feature name and price
}