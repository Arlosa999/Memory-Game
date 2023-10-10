//create an object that will store all cards from html 
const cards=document.querySelectorAll(".gamecard")
//perform a function to flip the card 
function flipCard(card) {
    this.classList.toggle('flip')
    console.log("i clicked the card")
}
for (let i=0; i<cards.length; i++){
    i++
    cards[i].addEventListener('click', flipCard)

}

//create an event to add event listener to the card to flip when card is clicked 
cards.forEach(card => card.addEventListener('click',flipCard)) 
// console.log(event.target.parentElement)
// flipCard(event.target.parentElement)

// var shuffleCards=cards.sort(()=> (Math.random()>.5)?2:-1)
// for (var i=0; i<cards.length; i++){
// let cardVariations=document.createElement('div')

// }