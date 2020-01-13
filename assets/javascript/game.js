$(function () {
    const log = console.log;
    var crystal_values = [
        {crystal: 'denim', value: 0},
        {crystal: 'orange', value: 0},
        {crystal: 'pink', value: 0},
        {crystal: 'vintage', value: 0}
    ];

    var user_total = 20;




    $("img").on("click", (event) => {
        var crystal = event.target.id;

        log("Crystal clicked: ", crystal);
        // add the value of the crystal clicked to user total
        // then execute updateUserTotal()
        
        for (var a = 0; a < crystal_values.length; a++){
            // if crystal clicked matches the crystal name in the
            // array cystal_value and that value of the object to 
            // the user total variable
            if(crystal_values[a].crystal == crystal){
                user_total += crystal_values[a].value;
                updateUserTotal();
            }
        }
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

    // create a function that updates the user's total
    function updateUserTotal(){
        $("#user_total").text(user_total);
    }

    // Execute all functions that need to be ran at the begining of 
    // the game here.

    // Gives crystals the values for the game
    giveCrystalsValue();

    // displays the winning number
    newWinningNum();

    // displays initial user total
    updateUserTotal();

    



});