let student = {
    name: 'Sarah',
    major: 'Computer Science',
    'Grad Year': '2022',
    greeting: function() {console.log('Hello!');},
    'Favorite Teacher': {
        name: 'Thomas Powell',
        course: 'CSE 110'
    },
    courseLoad: ['CSE 110', 'CSE 134', 'VIS 41']
}

console.log(student.courseLoad[0]);

/*function discountPrices(prices, discount){
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

discountPrices([100,200,300], 0.5);*/