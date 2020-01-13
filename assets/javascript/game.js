$(function () {
    const log = console.log;
    var crystal_values = [
        {crystal: 'denim', value: 0},
        {crystal: 'orange', value: 0},
        {crystal: 'pink', value: 0},
        {crystal: 'vintage', value: 0}
    ]

    $("img").on("click", (event) => {
        var crystal = event.target.id;
    });


    // Create a function that generates a random number
    function randomNum(maxNum){
        return Math.floor(Math.random() * maxNum) + 1;
    }

    // Create a function that gives the crystals a random 
    // number value from 1-12
    function giveCrystalsValue(){
        for (var i = 0; i < crystal_values.length; i++){
            crystal_values[i].value = randomNum(12);
        }

        log(crystal_values);
    }

    function newWinningNum(){
        $("#winning_number").text(randomNum(102) + 18);
    }

    // Execute all functions that need to be ran at the begining of 
    // the game here.
    giveCrystalsValue();
    newWinningNum();

    



});