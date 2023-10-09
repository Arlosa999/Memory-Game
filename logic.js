//create an object that will all cards from html 
const cards=document.querySelectorAll(".gamecard")
//perform a function to flip the card 
function flipCard() {
    this.classList.toggle('flip')
}
//create an event to add event listener to the card to flip when card is clicked 
cards.forEach(card => card.addEventListener('click', flipCard))