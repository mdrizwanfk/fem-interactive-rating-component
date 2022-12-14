// Elements
const feedbackSurvey = document.getElementById("feedback-survey");
const feedbackComplete = document.getElementById("feedback-complete");
const survey = document.getElementById("survey");
const feedbackAckMsg = document.getElementById("feedback-ack-msg");
const surveySubmit = document.querySelector(`#survey button[type="submit"]`);
const ratingButtons = document.querySelectorAll(
  `#survey button[type="button"]`
);

// Variables
let rating = -1;

// Init
if (getComputedStyle(feedbackComplete).display !== "none") {
  feedbackComplete.style.display = "none";
}

if (rating === -1) surveySubmit.disabled = true;

// Event Handlers
const updateRating = (event) => {
  const element = event.target;
  rating = element.innerText;
  surveySubmit.disabled = false;
  ratingButtons.forEach((ratingButton) => {
    if (ratingButton === element)
      ratingButton.classList.add("circle-btn-selected");
    else ratingButton.classList.remove("circle-btn-selected");
  });
};

const onFormSubmit = (event) => {
  event.preventDefault();
  if (rating === -1) {
    return;
  }

  feedbackSurvey.style.display = "none";
  feedbackComplete.style.display = "block";
  feedbackAckMsg.innerText = `You selected ${rating} out of 5`;
};

// Event Listeners
surveySubmit.addEventListener("click", onFormSubmit);

ratingButtons.forEach((button) => {
  button.addEventListener("click", updateRating);
});
