function printNums() {
    console.log(1);
    setTimeout(function() { console.log(2); }, 1000);
    setTimeout(function() { console.log(3); }, 0);
    console.log(4);    
}

printNums();


/*function modifyArray(array, callback) {
    const newArr = [];
    for(let i = 0; i < array.length; i++){
        newArr.push(callback(array[i]));
    }
    return newArr;
}

function doSomething(num){
    return num * 2;
}

console.log(modifyArray([1,2,3], doSomething));*/

/*let student = {
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

console.log(student.courseLoad[0]);*/

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