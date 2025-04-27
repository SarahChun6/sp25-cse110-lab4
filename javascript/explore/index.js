function sumValues(num1, num2, add){

    if(add){
        var result = 0;
        result = num1 + num2;
        console.log('values added: ', result); //here
    }else return;
    console.log('final result: ', result); //here

}

sumValues(10,10, true)