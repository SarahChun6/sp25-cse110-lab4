function discountPrices(prices, discount){
    let discounted = [];
    let length = prices.length;

    for(let i = 0; i < length; i++){
        const discountedPrice = prices[i] * (1 - discount);
        discounted.push(discountedPrice);
    }

//    console.log(length);
//    console.log(discountedPrice);
//    console.log(finalPrice);

    console.log(discounted);

    return discounted;
}

discountPrices([100,200,300], 0.5);