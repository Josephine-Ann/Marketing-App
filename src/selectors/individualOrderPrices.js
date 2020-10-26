export default (orders, purchases, features, orderIndex) => {
    const finalProduct = []
    const orderIds = []
    let purchasesFromOrderIds = []
    let featuresIdsFromPurchases = []
    let featuresFromFeatureIds = []
    let amounts = []
    orders.forEach((order) => {
        finalProduct.push(order.date)
        orderIds.push(order.orderId)
    })
    orderIds.forEach((orderId) => {
        purchasesFromOrderIds.push(purchases.filter(purchase => purchase.orderId === orderId))
    })
    purchasesFromOrderIds.map((purchases) => {
        return purchases.map(purchase => purchase.featureId)
    })
    purchasesFromOrderIds.map((purchases) => {
        featuresIdsFromPurchases.push([])
        purchases.map((purchase) => {
            featuresIdsFromPurchases[featuresIdsFromPurchases.length - 1].push(purchase.featureId)
        })
    })
    featuresIdsFromPurchases.forEach((featureId) => {
        featuresFromFeatureIds.push([])
        featureId.forEach((fid) => {
            featuresFromFeatureIds[featuresFromFeatureIds.length - 1].push(features.find(feature => feature.id === fid))
        })
    })
    featuresIdsFromPurchases.forEach((featureId) => {
        featuresFromFeatureIds.push([])
        featureId.forEach((fid) => {
            featuresFromFeatureIds[featuresFromFeatureIds.length - 1].push(features.find(feature => feature.id === fid))
        })
    })
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    featuresFromFeatureIds.forEach((feature) => {
        amounts.push([0])
        feature.forEach(f => amounts[amounts.length - 1].push(f.amount))
        amounts[amounts.length - 1] = amounts[amounts.length - 1].reduce(reducer)
    })
    return amounts
}
// featuresFromOrderIds.push(features.find(feature => feature.id === orderIds[0]))
