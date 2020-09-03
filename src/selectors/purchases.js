export default (features, purchases) => {
    // get all of the featureIds from purchases
    let featureIds = purchases.map(x => x.featureId);
    // go through each featureId and look for it in features
    let finalItems = []
    featureIds.forEach((x) => {
        finalItems.push(features.find(feature => feature.id === x));
    });
    return finalItems.map(x => `You have ${x.name} in your cart, which costs ${x.amount}`)
    // return feature name and price
}