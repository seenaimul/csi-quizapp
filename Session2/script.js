// scripts.js

function loginClicked() {
  window.location.href = "login.html";
}

function signupClicked() {
  window.location.href = "signup.html";
}

function createQuizClicked() {
  window.location.href = "CreateQuizBanner.html";
}

function cancelClicked() {
  // Add your logic for cancel button
  alert("Cancel clicked");
}

function saveNextClicked() {
  window.location.href = "CreateQuestions.html";
}
function editQuizClicked() {
  alert("Edit Quiz button clicked");
}
function joinQuizClicked() {
  // Add logic for join quiz
  alert("Join Quiz button clicked");
}

function startQuizClicked() {
  // Add logic for start quiz
  alert("Start Quiz button clicked");
}

function searchClicked() {
  // Add logic for search
  alert("Search button clicked");
}

function previewImage(event) {
  const bannerPreview = document.getElementById("banner-preview");
  const selectedFile = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    bannerPreview.style.display = "block"; // Show the preview image container
    bannerPreview.src = event.target.result;
  };

  reader.readAsDataURL(selectedFile);
}
