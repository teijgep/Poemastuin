
// STAP 1 - document.querySelector
// JOUW CODE HIER
// zoek de button in de derde li op in het document
const likeItButton = document.querySelector('li[aria-label="like-it"] button');


// STAP 2 - addEventListener
// JOUW CODE HIER
// laat de button luisteren naar 'click'
likeItButton.addEventListener("click", toggleLikeIt);


// STAP 3 - function en classList
// maak een function aan
// toggle in function de class 'liked' op/af de button
function toggleLikeIt() {
	likeItButton.classList.toggle("liked");
} 












