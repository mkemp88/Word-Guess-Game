
var wordBank = ["aguero", "boateng", "cavani", "chicharito", "costa", "coutinho", "elneny", "firmino", "forsberg", "griezmann", "gunnarsson","kane","lewandowski","lozano","lukaku","mane","mertens","messi","mitrovic","modric","nacho","navas","neymar","ochoa","ramos","rodriguez","ronaldo","salah","suarez"];
var word = [];
var wrongGuesses = [];
var rightGuesses = [];
var images = ["aguero.jpg", "boateng.jpg", "cavani.jpg", "chicharito.jpg", "costa.jpg", "coutinho.jpg", "elneny.jpg", "firmino.jpg", "forsberg.jpg", "griezmann.jpg", "gunnarsson.jpg","kane.jpg","lewandowski.jpg","lozano.jpg","lukaku.jpg","mane.jpg","mertens.jpg","messi.jpg","mitrovic.jpg","modric.jpg","nacho.jpg","navas.jpg","neymar.jpg","ochoa.jpg","ramos.jpg","rodriguez.jpg","ronaldo.jpg","salah.jpg","suarez.jpg"];

$(document).ready(function() {
  function randomWord() {
    var random = Math.floor(Math.random() * wordBank.length);
    var toString = wordBank[random];
    console.log(toString);
    word = toString.split("");
    console.log(word);
  }
  randomWord();

  function wordSpaces() {
    for (var i = 0; i < word.length; i++) {
      $(".word-spaces > tbody > tr").append('<td data-idx=i>' + word[i] + '</td>')

    }
  }
  wordSpaces();

  function play(space) {
    //indexOf()==inArray() 
    var lIndex = jQuery.inArray(space, word);
    if (lIndex == -1) {
      wrongGuesses.push(space);
      var wrong = wrongGuesses.length;
      console.log('wrong ' + wrong)
      $('.wrongLetters tbody tr td:nth-of-type(' + wrong + ')').text(space);

      $(this).css("background-color", "#ff4500").fadeIn(300).delay(800).fadeOut(300);
      $(images[i - 1]).hide();
      $(images[i]).show();
      i++;
    } else {
      $(".word-spaces tbody tr td:nth-of-type(" + (lIndex + 1) + ")").css('color', 'black');
      rightGuesses.push(space);

    }
  }

  $(".form-control").keypress(function(event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == 13) {
      var space = $(this).val();
      play(space);
      $(this).val('');
      endGame();
      return false;
    }
  });


  function endGame() {
    if (wrongGuesses.length >= 10 || rightGuesses.length == word.length) {
      $("body").css("background-color", "#ff4500");
      $(".form-control").prop('disabled', true);
    }
  }
});



