var computerChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n', 'o','p','q','r', 's', 't','u','v','w','x','y','z']
var wins = 0;
var losses = 0;
var gusses = 9;
var ettersGuessed = [];
var gussingletters = null;


var computerGusses =  computerChoices[Math.floor 
    (math.random() * computerChoices.length)];

    var updateGuessRemaining = function () {this .gussingletters = this. computerChoices.length)];
        
var updateGuessAllready = function (){
    totalGuesses = 9; 
    gussesRemainig = 9;
    lettersGuessed = [];
     updateGuessletters();
     updateGuessRemaining();
     updateGuessAllready();


     updateGuessletters();
     updateGuessRemaining();

     document.onkeyup = function (event){
         guessRemaining--;
         var userGuess =string.fromCharcode(event.keyCode).toLocaleLowerCase();
         

         lettersGuessed.push(userGuess);
         updateGuessRemaining();
         updateGuessAllready();

         if (guessesRemaining> 0){
             if(userGuess == guessingLetters){
                 win++
                 document.querySelector('#wins').innerHTML ="Wins:" + wins;
                 alert("The letter you guessed was" + guessingLetter + "that was the right letter!");
                 reset();

          
         
     }
     else if (gussesRemainig == 0){
         losses ++;
         document.querySelector('#Losses').innerHTML = "losses:" + losses;
         alert( "The letter you were traying to guess was" + gussingletters);
         reset();


     }
      
} ; 