// add variables to reference DOM elements
// example is below
let questionsEl = document.getElementById('questions');
let choicesEl = document.getElementById ('choices');

// Get the length of the 'questions' array
numberOfQuestions = questionsEl.length;

// Now 'numberOfQuestions' contains the length of the array
console.log(numberOfQuestions);

let myText = console.log(numberOfQuestions);;
          let outputParagraph = document.getElementById("outputParagraph");
          outputParagraph.textContent = questionsEl.length;


// add variables that keep track of the quiz "state"
let currentQuestionIndex = 0;

// Now you can use 'numberOfQuestions' in this file
console.log(`There are ${numberOfQuestions} questions.`);
console.log (questions);
let time = numberOfQuestions* 15;
let timerId;


// reference the sound effects
let sfxRight = new Audio('assets/sfx/correct.wav');
let sfxWrong = new Audio('assets/sfx/incorrect.wav');

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
  questions.style.display = '';

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

  for (let i = 0; i < numberOfQuestions; i++) {
    const button = document.createElement('button');
    button.textContent = `Choice ${i + 1}`;
    choicesEl.appendChild(button);
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
  // 'choices' is the ID of the container element for choices
  let choicesEl = document.getElementById('choices');
  // Clear out old question choices
  choicesEl.innerHTML = '';
  // loop over the choices for each question
  for (let i = 0; i < currentQuestion.choices.length; i++) {
    // Create a new button for each choice
    let choiceButton = document.createElement('button');
    
    // Set the label and value for the button
    choiceButton.textContent = currentQuestion.choices[i];
    choiceButton.value = currentQuestion.choices[i];

    // Append the choice button to the choices container
    choices.appendChild(choiceButton);

    // Add an event listener for the button click
    choiceButton.addEventListener('click', function(event) {
        // Call a function to handle the click event, passing the chosen value
        handleChoiceClick(event.target.value);
    });
}

  // get the number of questions
  let numberOfQuestions; // assign it the value of the length of the questions array
  for (let i = 0; i < numberOfQuestions; i++) {

    // create a new button for each choice, setting the label and value for the button

    // display the choice button on the page

  }
}

function questionClick(event) {
  const clickedElement = event.target;

  // Check if the clicked element is a choice button
  if (clickedElement.matches('button')) {
    const userChoice = clickedElement.textContent;

    // Check if the user's choice is correct
    if (userChoice === questions[currentQuestionIndex].answer) {
      // If correct, play "right" sound effect
      sfxRight.play();

      // Display "right" feedback on page
      displayFeedback('Correct!', 'right');

      // Increase the score (if you have a score variable)
      // Example: score++;

    } else {
      // If wrong, play "wrong" sound effect
      sfxWrong.play();

      // Penalize time by subtracting 15 seconds from the timer
      time -= 15;

      // If the timer goes below zero, set it to zero
      if (time < 0) {
        time = 0;
      }

      // Display updated time on the page
      displayTime();

      // Display "wrong" feedback on page
      displayFeedback('Wrong!', 'wrong');
    }

    // Move to the next question
    currentQuestionIndex++;

    // Check if we've run out of questions
    if (currentQuestionIndex < questions.length) {
      // If there are more questions, get the next question
      getQuestion();
    } else {
      // If there are no more questions, end the quiz
      quizEnd();
    }
  }
}

// Function to display feedback on the page
function displayFeedback(message, type) {
  const feedbackElement = document.getElementById('feedback');
  feedbackElement.textContent = message;
  feedbackElement.classList.add(type);

  // Flash right/wrong feedback on page for half a second
  setTimeout(() => {
    feedbackElement.classList.remove(type);
  }, 500);
}

// define the steps of the QuizEnd function...when the quiz ends...
function quizEnd() {
  // Stop the timer
  clearInterval(timerId);

  // Show end screen
  const endScreen = document.getElementById('end-screen');
  endScreen.style.display = 'block';

  // Show final score
  const finalScore = document.getElementById('final-score');
  finalScore.textContent = time; // Assuming you have an element to display the final score

  // Hide the "questions" section
  const questionsSection = document.getElementById('questions');
  questionsSection.style.display = 'none';
}

// add the code in this function to update the time, it should be called every second
function clockTick() {
  // Update time
  time--;

  // Update the element to display the new time value
  displayTime();

  // Check if user ran out of time; if so, call the quizEnd() function
  if (time <= 0) {
    quizEnd();
  }
}

// Function to display the time
function displayTime() {
  // Assuming you have an element with id 'timer' to display the time
  const timerElement = document.getElementById('timer');
  timerElement.textContent = time;
}


// complete the steps to save the high score
function saveHighScore() {
  // Get the value of the initials input box
  const initialsInput = document.getElementById('initials');
  const initials = initialsInput.value.trim();

  // Make sure the value of the initials input box wasn't empty
  if (initials !== '') {
    //  if it is not, check and see if there is a value of high scores in local storage
    let highScores = JSON.parse(localStorage.getItem('highScores')) || [];

    // Add the new initials and high score to the array
    highScores.push({ initials, score: highscores });

    // Sort the high scores in descending order
    highScores.sort((a, b) => b.score - a.score);

    // Convert the array to a piece of text
    const highScoresText = JSON.stringify(highScores);

    //  then store the new array (converted to text) back in local storage
    localStorage.setItem('highScores', highScoresText);

    // Redirect the user to the high scores page
    window.location.href = 'highscores.html';
  }
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
