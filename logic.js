
// add variables that keep track of the quiz "state"
let currentQuestionIndex = 0;

//import { questions} from 'questions.js';
//<script src="./assets/js/questions.js"></script>
// Import the questions array
import { questions } from 'questions.js';

// Get the length of the 'questions' array
const numberOfQuestions = questions.length;

// Now you can use 'numberOfQuestions' in this file
console.log(`There are ${numberOfQuestions} questions.`);
console.log (questions);
let time = numberOfQuestions* 15;
let timerId;

// add variables to reference DOM elements
// example is below
let questionsEl = document.getElementById('questions');
let choicesEl = document.getElementById ('choices');

// reference the sound effects
let sfxRight = new Audio('assets/sfx/correct.wav');
let sfxWrong = new Audio('assets/sfx/incorrect.wav');

startBtn.onclick = startQuiz();
// Get reference to the Start Quiz button
const startBtn = document.getElementById('startBtn');

// Event listener for button to start the quiz
startBtn.addEventListener('click', startQuiz);

function startQuiz() {
  // hide start screen
  const startScreen = document.getElementById('start-screen');
  startScreen.style.display = 'none';
  // un-hide questions section
  const questions = document.getElementById('questions');
  questions.style.display = 'none';

  console.log('startQuiz function called');
  // start timer
  startTimer ();

  // show starting time
  displayTime();

  // call a function to show the next question
  getQuestion();
}

// Function to start the timer
function startTimer() {
  timerId = setInterval (function () {
    time--;

    // Check if time has run out
    if (time <= 0) {
      endQuiz();
    }

    // Display updated time
    displayTime();
  }, 1000);
  }

function getQuestion() {
  // get current question object from array
  const currentQuestion = questions[currentQuestionIndex];
 // Initialize a variable to keep track of the current question index
let currentQuestionIndex = 0;

// Function to get the next question
function getNextQuestion() {
  // Check if there are more questions in the array
  if (currentQuestionIndex < questions.length) {
    // Get the next question and increment the index
    const nextQuestion = questions[currentQuestionIndex];
    currentQuestionIndex++;
    return nextQuestion;
  } else {
    // Return null or handle the case when there are no more questions
    return null;
  }
}

// Example usage:
const nextQuestion = getNextQuestion();
if (nextQuestion) {
  console.log(nextQuestion.question);
  console.log(nextQuestion.choices);
} else {
  console.log("No more questions");
}
  // update title with current question
  questionsEl.textContent = currentQuestion.question;
  // clear out any old question choices

  // loop over the choices for each question
  // get the number of questions
  let numberOfQuestions; // assign it the value of the length of the questions array
  for (let i = 0; i < numberOfQuestions; i++) {

    // create a new button for each choice, setting the label and value for the button

    // display the choice button on the page

  }
}

function questionClick(event) {
  // identify the targeted button that was clicked on

  // if the clicked element is not a choice button, do nothing.


  // check if user guessed wrong
  // if () {
  // if they got the answer wrong, penalize time by subtracting 15 seconds from the timer
  // recall the timer is the score they get at the end

  // if they run out of time (i.e., time is less than zero) set time to zero so we can end quiz


  // display new time on page

  // play "wrong" sound effect

  // display "wrong" feedback on page

}// else {
  // play "right" sound effect

  // display "right" feedback on page by displaying the text "Correct!" in the feedback element}

// flash right/wrong feedback on page for half a second
// set the feedback element to have the class of "feedback"


// after one second, remove the "feedback" class from the feedback element

// move to next question
currentQuestionIndex++;

// check if we've run out of questions
// if the time is less than zero and we have reached the end of the questions array,
// call a function that ends the quiz (quizEnd function)
// or else get the next question


// define the steps of the QuizEnd function...when the quiz ends...
function quizEnd() {
  // stop the timer
  clearInterval(timerId);
  // show end screen

  // show final score

  // hide the "questions" section
}

// add the code in this function to update the time, it should be called every second
function clockTick() {
  // right here - update time

  // update the element to display the new time value

  // check if user ran out of time; if so, call the quizEnd() function

}

// complete the steps to save the high score
function saveHighScore() {

  // get the value of the initials input box

  // make sure the value of the initials input box wasn't empty

  // if it is not, check and see if there is a value of high scores in local storage

  // if there isn't any, then create a new array to store the high score

  // add the new initials and high score to the array

  // convert the array to a piece of text

  // store the high score in local storage

  // otherwise, if there are high scores stored in local storage,
  // retrieve the local storage value that has the high scores,
  // convert it back to an array,
  // add the new initials and high score to the array,
  // then convert the array back to a piece of text,
  // then store the new array (converted to text) back in local storage

  // finally, redirect the user to the high scores page.

}

// use this function when the user presses the "enter" key when submitting high score initials
function checkForEnter(event) {
  // if the user presses the enter key, then call the saveHighscore function
}

// user clicks button to submit initials
submitBtn.onclick = saveHighScore;

// user clicks button to start quiz
startBtn.onclick = startQuiz;

// user clicks on an element containing choices
choicesEl.onclick = questionClick;

initialsEl.onkeyup = checkForEnter;
