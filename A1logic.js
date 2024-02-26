// Variables to keep track of quiz state
let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerId;

// Variables to reference DOM elements
let questionsEl = document.getElementById('questions');
let choicesEl = document.getElementById('choices'); // assuming you have a container for choices in your HTML

// Sound effects
let sfxRight = new Audio('assets/sfx/correct.wav');
let sfxWrong = new Audio('assets/sfx/incorrect.wav');

// Function to start the quiz
function startQuiz() {
  // TODO: Hide start screen

  // TODO: Un-hide questions section

  // Start the timer
  startTimer();

  // Show starting time
  displayTime();

  // Call a function to show the first question
  showNextQuestion();
}

// Function to start the timer
function startTimer() {
  timerId = setInterval(function () {
    time--;

    // Check if time has run out
    if (time <= 0) {
      endQuiz();
    }

    // Display updated time
    displayTime();
  }, 1000);
}

// Function to display the current question
function showNextQuestion() {
  // Get the current question object
  const currentQuestion = questions[currentQuestionIndex];

  // TODO: Update title with current question

  // Clear out old choices
  choicesEl.innerHTML = '';

  // Loop over the choices for the current question
  currentQuestion.choices.forEach(function (choice, index) {
    // Create a new button for each choice
    const choiceButton = document.createElement('button');
    choiceButton.textContent = `${index + 1}. ${choice}`;
    choiceButton.setAttribute('data-index', index);

    // Add click event listener to handle user choice
    choiceButton.addEventListener('click', questionClick);

    // Display the choice button on the page
    choicesEl.appendChild(choiceButton);
  });
}

// Function to handle user's choice
function questionClick(event) {
  // Identify the targeted button that was clicked on
  const userChoice = event.target;
  const choiceIndex = userChoice.getAttribute('data-index');

  // TODO: Check if the user guessed correctly
  if (choiceIndex == currentQuestion.correctAnswer) {
    // User got it right
    handleCorrectAnswer();
  } else {
    // User got it wrong
    handleWrongAnswer();
  }

  // Move to the next question
  currentQuestionIndex++;

  // Check if we've run out of questions
  if (currentQuestionIndex < questions.length) {
    // Show the next question
    showNextQuestion();
  } else {
    // No more questions, end the quiz
    endQuiz();
  }
}

// Function to handle correct answer
function handleCorrectAnswer() {
  // Play "right" sound effect
  sfxRight.play();

  // TODO: Display "Correct!" feedback on page

  // Flash right feedback on page for half a second
  choicesEl.classList.add('correct-feedback');

  // After one second, remove the "correct-feedback" class
  setTimeout(function () {
    choicesEl.classList.remove('correct-feedback');
  }, 1000);
}

// Function to handle wrong answer
function handleWrongAnswer() {
  // Deduct time by subtracting 15 seconds
  time -= 15;

  // Play "wrong" sound effect
  sfxWrong.play();

  // TODO: Display "Wrong!" feedback on page

  // Flash wrong feedback on page for half a second
  choicesEl.classList.add('wrong-feedback');

  // After one second, remove the "wrong-feedback" class
  setTimeout(function () {
    choicesEl.classList.remove('wrong-feedback');
  }, 1000);
}

// Function to display the remaining time
function displayTime() {
  // TODO: Update the element to display the new time value
}

// Function to end the quiz
function endQuiz() {
  // Stop the timer
  clearInterval(timerId);

  // TODO: Show end screen

  // TODO: Show final score

  // TODO: Hide the "questions" section
}

// ... (existing functions remain unchanged)

// Event listener for button to submit initials
submitBtn.onclick = saveHighScore;

// Event listener for button to start the quiz
startBtn.onclick = startQuiz;

// Event listener for user clicks on choices
choicesEl.onclick = questionClick;

// Event listener for user keyup event when submitting initials
initialsEl.onkeyup = checkForEnter;