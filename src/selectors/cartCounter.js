export default (purchases) => {
    // get all of the featureIds from purchases
    let bought = purchases.filter(x => x.bought === false);
    // go through each featureId and look for it in features
    return bought.length;
    // return feature name and price
}