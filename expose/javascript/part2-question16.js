let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
}

for(let letter in statistics){
    if(letter[0] == 'r' || statistics[letter] % 2 != 0){
        console.log(statistics[letter])
    }
}