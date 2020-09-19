export default (purchases) => {
    // get all of the featureIds from purchases
    let quantities = purchases.map(x => parseInt(x.quantity, 10));
    // go through each featureId and look for it in features
    return quantities.reduce(function (a, b) { return a + b; }, 0);
    // return feature name and price
}