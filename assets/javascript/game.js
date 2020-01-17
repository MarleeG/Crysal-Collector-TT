$(function () {
    var crystal_values = [
        {crystal: 'denim', value: 0},
        {crystal: 'orange', value: 0},
        {crystal: 'pink', value: 0},
        {crystal: 'vintage', value: 0}
    ];

    var user_total = 0;
    var wins = 0;
    var losses = 0;
    var status = "Game Started!";

    $("img").on("click", (event) => {
        var crystal = event.target.id;

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

        updateScores();
        
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

    }

    function newWinningNum(){
        // restarts the game by making user total variable equal 0
        user_total = 0;
        updateUserTotal();
        // status = 'Game Started!';
        displayScores();

        $("#winning_number").text(randomNum(102) + 18);
    }

    // create a function that updates the user's total
    function updateUserTotal(){
        $("#user_total").text(user_total);
    }


    // create a function that updates/checks the score
    function updateScores(){
        // this will assign the number value of the random/winning number to the winning_num variable
        var winning_num = parseInt($("#winning_number").text());


        if(user_total > winning_num){
            // increase losses by 1
            losses++;

            // update scores and game status to the user
            status = "You lost!"
            displayScores();


            // generate another random number;
            // user total set back to 0 and update on screen

            newWinningNum();

            // change crystal values
            giveCrystalsValue();
            
            alert(`You have lost the game!`);
        }else if (user_total === winning_num){
            // increase wins by 1 
            wins++;

            // and update game status and scores to the user
            status = "You won!";
            displayScores();

           // user total set back to 0 and update on screen
            newWinningNum();

            // change crystal values
            giveCrystalsValue();
            alert("You've won the game");
        }
    }


    // this will display the updated scores to the user
    function displayScores(){
        $("#wins").text(wins);
        $("#losses").text(losses);
        $("#status").text(status);
    }

    

    // Execute all functions that need to be ran at the begining of 
    // the game here.

    // Gives crystals the values for the game
    giveCrystalsValue();

    // displays the winning number
    newWinningNum();

    // displays initial user total
    // updateUserTotal();

    // display scores
    displayScores();



});