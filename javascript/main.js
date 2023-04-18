let rating = sessionStorage.getItem("rating") || 0;

function updateRating(ratingClicked) {
  sessionStorage.setItem("rating", ratingClicked);
  rating = ratingClicked;
}

function submit() {
  if (rating !== 0) {
    window.location.href = "thank-you.html";
  }
}
