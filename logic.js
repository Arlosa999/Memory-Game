//create an object that will store all cards from html 
const cards=document.querySelectorAll(".gamecard")
// I need to create objects that represent the flipping part of the game 
let flippedCard=false
let firstcard, secondcard

//perform a function to flip the card 
function flipCard(card) {
    this.classList.add('flip')
    // console.log("i clicked the card")
    if(!flippedCard){
        flippedCard=true
        firstcard=this
    }
    else{
        flippedCard=false
        secondcard=this
    }
    //we need to chekc if cards match 
    // console.log(firstcard.dataset.card===
    //     secondcard.dataset.card) {
    //         firstcard.removeEventListener("click", flipCard)
    //         secondcard.removeEventListener("click", flipCard)
    //     }
    
}

// for (let i=0; i<cards.length; i++){
//     i++
//     cards[i].addEventListener('click', flipCard)

// }

//create an event to add event listener to the card to flip when card is clicked 
cards.forEach(card => card.addEventListener('click',flipCard)) 
// console.log(event.target.parentElement)
// flipCard(event.target.parentElement)

// var shuffleCards=cards.sort(()=> (Math.random()>.5)?2:-1)
// for (var i=0; i<cards.length; i++){
// let cardVariations=document.createElement('div')

// }

