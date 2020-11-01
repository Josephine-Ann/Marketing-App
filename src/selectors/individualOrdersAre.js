export default (orders, purchases, features) => {
    const finalProduct = []
    const orderIds = []
    let purchasesFromOrderIds = []
    let featuresIdsFromPurchases = []
    let featuresFromFeatureIds = []
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
    return featuresFromFeatureIds
}
// featuresFromOrderIds.push(features.find(feature => feature.id === orderIds[0]))
