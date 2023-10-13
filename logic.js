//create an object that will store all cards from html 
const cards=document.querySelectorAll(".gamecard")
// array for flipping cards 
let guess=[]

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
}

// Trucking 2 guesses so only 2 cards are flipping and if match they stay front-face if doesnr they turn back 


// for (let i=0; i<cards.length; i++){
//     i++
//     cards[i].addEventListener('click', flipCard)

// }

//create an event to add event listener to the card to flip when card is clicked 
cards.forEach(card => card.addEventListener('click',(e)=>{      //e-means event 

console.log(e.target.parentElement)
console.log(e.target.parentElement.dataset.id)
if(!e.target.parentElement.classList.contains("flip")) {
    e.target.parentElement.classList.toggle("flip")  //checking if card has been flipped 
}

//checking if card is flipped 
guess.push(e.target.parentElement.dataset.id)
console.log(guess)
if (guess.length===2){
    if(guess[0]===guess[1]){
        guess.pop()
        guess.pop()  
    }
    if(guess[0]!==guess[1]){
        document.querySelectorAll(".flip").forEach((item)=>{
            setTimeout(()=>{item.classList.toggle("flip")}, 1000);
        }) ///i am trying to flip not matching cards back 
        }
        
        guess.pop()
        guess.pop()
        }}
    ))       

// console.log(event.target.parentElement)
// flipCard(event.target.parentElement)

// var shuffleCards=cards.sort(()=> (Math.random()>.5)?2:-1)
// for (var i=0; i<cards.length; i++){
// let cardVariations=document.createElement('div')

// }

