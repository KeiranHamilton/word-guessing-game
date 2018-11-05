
var myAnimals = ["giraffe", "kangaroo", "elephant", "monkey", "sloth", "panther", "hippopotamus"
];
var word = myAnimals[Math.floor(Math.random() * myAnimals.length)];
 



 var answerList = [];
 for (var i = 0; i < word.length; i++) {
 answerList[i] = "_";
 }
 
 var remainingLetters = word.length;

 
 while (remainingLetters > 0) {
 
 alert(answerList.join(" "));
 
 var guess = prompt("Please guess a letter,");
 
 if (guess === null) {
 // Exit the game loop
 break;
 
} else if (guess.length !== 1) {
 alert("Please enter a single letter.");
 } else {
 
 for (var j = 0; j < myAnimals.length; j++) {
 if (word[j] === guess) {
 answerList[j] = guess;
 remainingLetters--;
 }
 }
 }
}

alert(answerArray.join(" "));
alert("Awesome! Great Job! " + word);


