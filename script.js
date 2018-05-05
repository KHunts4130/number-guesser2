
numberGuesser();

function numberGuesser() {
  var winCount = 0;
  var $guessedNum = $('.guess-input');
  var $guessbtn = $('.guess-btn');
  var $clearbtn = $('.clear-btn');
  var $resetbtn = $('.reset-btn');
  var $buttonDisable = $('.button-style');
  var $currentGuess = $('.current-guess');
  var $guessReply = $('.guess-reply');
  var $counter = $('.guess-counter');
  var $rangeReply = $('.range-reply');
  var $minMax = $('.min-max');
  

  numberGenerator();

  function numberGenerator() {
    var guessCounter = 0;
    var winModifier = winCount * 10;
    var max = 100 + winModifier;
    var min = 1 - winModifier;
    var random = Math.floor(Math.random() * max + 1) - winModifier;
    var parsedGuess = parseInt($guessedNum.val());
    console.log('random ' + random);
    $minMax.html('Input Range is: ' + min + ' - ' + max);
    $resetbtn.on('click', resetGame);
    $clearbtn.on('click', clearInput);
    $guessedNum.on('keyup', enableButtons);
    $guessbtn.on('click', checkGuess);
      

    function checkGuess() {
        
      var parsedGuess = parseInt($guessedNum.val());
      console.log('checkGuess ' + parsedGuess);
      guessCounter++
      $currentGuess.html(parsedGuess);
        
      if (parsedGuess > max) {
        $rangeReply.html('Enter a number smaller then ' + max);
      } else if (parsedGuess < min) {
        $rangeReply.html('Enter a number larger then ' + min);
      } else if ((parsedGuess <= max) && (parsedGuess >=min)) {
        $rangeReply.html('That is in range');
      } winGuess();
    };

    function winGuess() {
      var parsedGuess = parseInt($guessedNum.val());
      console.log ('winCount ' + winCount);
      if (parsedGuess > random) {
        $guessReply.html('Too High');
      } else if (parsedGuess < random) {
        $guessReply.html('too Low');
      } else (winner());
      $counter.html('Number of Guesses ' + guessCounter);
      $guessbtn.prop('disabled', true);
    };

    function winner() {
      $guessReply.html('Boom goes the dynamite!');
      winCount++;
      $guessbtn.prop('disabled', true);
      $guessedNum.prop('disabled', true);
    };

    function clearInput() {
      $guessedNum.val('');
      $clearbtn.prop('disabled', true);
    };

    function enableButtons() {
      $buttonDisable.prop('disabled', false);
    };

    function resetGame() {
      $guessedNum.val('');
      $guessReply.html('');
      $currentGuess.html('#');
      $counter.html('');
      $buttonDisable.prop('disabled', true);
      $guessedNum.prop('disabled', false);
      numberGenerator();
    };
  };
};


