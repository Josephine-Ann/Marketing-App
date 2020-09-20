export default (feature, purchases) => {
    // get all of the featureIds from purchases
    const purchaseId = purchases.find(x => x.featureId === feature);
    // go through each featureId and look for it in features
    return purchaseId.id
    // return feature name and price
}