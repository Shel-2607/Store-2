export const getDiscountedPricePercentage = (
    originalPrice,
    discountedPrice
) => {
    const discount = originalPrice - discountedPrice;

    const discountPercentage = (discount / originalPrice) * 100;

    return discountPercentage.toFixed(2);
};//iss fix se agr value like 89.7656 hui toh 89.76 ho jayegi