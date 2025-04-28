let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for(let i in statistics){
    //console.log('i[0]', i[0]);
    //console.log('statistics[i]', statistics[i]);

    if(i[0] == 'r'){
        console.log(i);
    }else if((statistics[i] % 2) == 1){
        console.log(i);
    }
}