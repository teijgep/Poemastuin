
// STAP 1 - document.querySelector
// JOUW CODE HIER
// zoek de div in de tweede li op in het document
// zoek de button in de tweede li op in het document
const springenDiv = document.querySelector('li:nth-of-type(2) div');
const springenButton = document.querySelector('li[aria-label="springen"] button');

// STAP 2 - addEventListener
// JOUW CODE HIER
// laat de button luisteren naar double 'click' (dblclick)
dblclickButton.addEventListener("springen", toggleExcited);


// STAP 3 - function en classList
// maak een function aan
// toggle in function de class 'excited' op/af de div
function toggleExcited() {
	dblclickDiv.classList.toggle("excited");
} 








