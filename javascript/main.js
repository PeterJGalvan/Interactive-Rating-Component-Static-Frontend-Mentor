function updateRating(ratingClicked) {
  const prevValue = sessionStorage.getItem("rating");

  if (prevValue !== null) {
    document.getElementById(prevValue).className = "rating-button";
    document.getElementById(prevValue).remove.className =
      "rating-button-selected";
  }

  document.getElementById(ratingClicked).className = "rating-button-selected";
  document.getElementById(ratingClicked).remove.className = "rating-button";

  sessionStorage.setItem("rating", ratingClicked);
}

function submit() {
  if (sessionStorage.getItem("rating") !== null) {
    window.location.href = "thank-you.html";
  }
}

function clearRating() {
  sessionStorage.clear("rating");
}

function getRating() {
  return sessionStorage.getItem("rating");
}
