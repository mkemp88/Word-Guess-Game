

var names = ['aguero','boateng','cavani','chicharito','costa','coutinho','elneny','firmino','forsberg','griezmann','gunnarsson','kane','lewandowski','lozano','lukaku','mane','mertens','messi','mitrovic','modric','nacho','navas','neymar','ochoa','ramos','rodriguez','ronaldo','salah','suarez'] 

var currentName = "";

var currentNameLetters = []

var numBlanks = 0;

var correctLetters = []

var wrongLetters = []

var wins = 0;
var losses = 0;
var guesses = 12;

var guessesLeftDiv = $(".numberOfGuesses");
var winsCounter = $("#wins");
var lossCounter = $("#losses");
var displayCurrentName = $("#unsolvedName");

$(document).on('keyup',function(event){
    checkUserGuess(event.key);
});

var startGame = function(){
    guesses = 12;
    currentNameLetters = [];
    currentName = "";
    correctLetters = [];
    wrongLetters = [];
    $("#wrongLetters").html(wrongLetters);

    guessesLeftDiv.text(guesses);
    winsCounter.text(wins);
    lossCounter.text(losses);
    
    wordBlank();

};

function wordBlank(){
    var randomNum = Math.random() * names.length
    var roundedNum = Math.floor(randomNum);
    currentName = names[roundedNum];
    currentNameLetters = currentName.split("");
    for (var i = 0; i < currentNameLetters.length; i++){
        correctLetters.push("_");
    }
    displayCurrentName.text(correctLetters.join(" "));
}

function checkUserGuess(userGuess){
    if(currentNameLetters.indexOf(userGuess) > -1){
    for( var i = 0; i < currentNameLetters.length; i++){
        if(currentNameLetters[i] === userGuess){
                correctLetters[i] = userGuess;
            }
        }
        displayCurrentName.text(correctLetters.join(" "));
    }
    else{
        wrongLetters.push(userGuess);
        $('#wrongLetters').text(wrongLetters.join(" "));
    }
    roundComplete()
}

function roundComplete(){
    guesses--;
    guessesLeftDiv.text(guesses);
    if (guesses > 0){
        if(correctLetters.join("") === currentNameLetters.join("")){
            wins++;
            winsCounter.text(wins);
            displayCurrentName.text(correctLetters.join(" "));
            alert("You Won!");
            setTimeout(startGame, 1000);
        }
    }
    else{
        if(correctLetters.join("") === currentNameLetters.join("")){
            wins++;
            winsCounter.text(wins);
            displayCurrentName.text(correctLetters.join(" "));
            alert("You Won!");
            setTimeout(startGame, 1000);
        }
        else{
            losses++;
            lossCounter.text(losses);
            alert("You Lost!");
            startGame();
        }
    } 
}



startGame();


























// $(document).keyup(function(event){
//     if(event.originalEvent.keyCode === 32){
//             var random = Math.floor(Math.random() * names.length);
//             var wordSplit = names[random];
//             var underscore = []
//             for(i = 0; i < wordSplit.length; i++) {
//                 underscore.push(" _ ");
//             }
           
//             $(".unsolvedName").html(underscore);
//         }

//     })

// $(document).keyup(function(event) {
//         var char = [event.which];
//         var res = String.fromCharCode(event.which);
//         console.log(res);
//         console.log(event)
//         if(char === 32){

//         }
//       })
    //if(code == 13) { }









//for (var i = 0; i < imgArray.length; i++){
    //var basePathURL = "./images/"
    //basePathURL = basePathURL + imgArray[i];
    //var img = document.createElement('img');
    //img.setAttribute('src', basePathURL);
    //document.getElementById("imageBox").appendChild(img);

//}

//on the click of space bar create the word



//on the click of any letter register a guess add a letter if there and
//if not add the letter to the guessed area and register a mistake


//once 6 misses add point to loss and register new word  


//once the word is guessed right add point to the win 