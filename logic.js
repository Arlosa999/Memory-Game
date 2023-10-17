//create an object that will store all cards from html 
const cards=document.querySelectorAll(".gamecard")
// empty array for flipping cards 
let guess=[]

const resetButton = document.getElementById("resetbutton");
resetButton.addEventListener("click", resetGame);

// Trucking 2 guesses so only 2 cards are flipping and if match they stay front-face if doesnr they turn back 

//create an event to add event listener to the card to flip when card is clicked 
cards.forEach(card => card.addEventListener('click',(e)=>{      //e-means event 

console.log(e.target.parentElement)
console.log(e.target.parentElement.dataset.id)
if(!e.target.parentElement.classList.contains("flip")&& !e.target.parentElement.classList.contains("gameimages")) {
    e.target.parentElement.classList.toggle("flip")  //checking if card has been flipped 
    guess.push(e.target.parentElement.dataset.id)
}
//checking if card is flipped 
console.log(guess)
if (guess.length===2){
    if(guess[0]===guess[1]){
        guess=[] 
        winLogic()
        // console.log(match)
    }
    else if(guess[0]!==guess[1]){
        console.log(guess)
        guess.forEach((item)=>{
            setTimeout(()=>{
               const elementList = document.querySelectorAll(`[data-id="${item}"]`) 
               console.log(elementList)
                elementList.forEach(element=>{
                if (element.classList.contains("flip"))  {
                    element.classList.toggle("flip")  
                   }  
              })               
               // console.log(item.dataset.id)
            }, 500); ///i need to fix something here 
        }) ///i am trying to flip not matching cards back 
        guess=[]
    }
        } 
    }   
    ))  
function resetGame() {

    // Reset all cards to face down
    cards.forEach(card => {
        if (card.classList.contains("flip")) {
            card.classList.remove("flip");
        }
    });
    shuffleCards()
}
function shuffleCards() {
    const cardArray = Array.from(cards);
    cardArray.forEach(card => {
        const randomPosition = Math.floor(Math.random() * cardArray.length);
        card.style.order = randomPosition;
    });
}  
// function confettiCongratulations() {
//     particlesJS('confetti', {
//         particles: {
//             number: { value: 100 },
//             color: { value: '#4caf50' },
//             shape: { type: 'circle' },
//             size: { value: 5 },
//             move: { enable: true, speed: 6, direction: 'none', random: true, straight: false, out_mode: 'out' }
//         },
//         interactivity: {
//             events: { onhover: { enable: false, mode: 'repulse' } }
//         }
//     });
// }

function winLogic (){
    const flippedCards=document.querySelectorAll('.flip')
    console.log(flippedCards.length)
    console.log(cards.length)
    if(flippedCards.length===cards.length){
        const winTheGame=document.getElementById("popUpWindowWin")
        winTheGame.style.display="block"
        // confettiCongratulations()
        console.log("winTheGame")
    }
}
shuffleCards()


//timer 
// document.addEventListener(".resetbutton", function () {
//     // Set the target date and time (in this example, 5 minutes)
//     const targetTime = new getTime() + 5 * 60 * 1000;

//     // Update the timer every second
//     const timerInterval = setInterval(updateTimer, 1000);

//     function updateTimer() {
//         const currentTime = new getTime();
//         const timeDifference = targetTime - currentTime;

//         // Calculate minutes and seconds
//         const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

//         // Display the time in the HTML
//         document.getElementById("minutes").innerText = padZero(minutes);
//         document.getElementById("seconds").innerText = padZero(seconds);

//         // Check if the timer has reached 0
//         if (timeDifference < 0) {
//             clearInterval(timerInterval);
//             alert("Time's up!");
//         }
//     }
//     // Function to pad zero for single-digit minutes and seconds
//     function padZero(value) {
//         return value < 10 ? "0" + value : value;
//     }
// });
// console.log(event.target.parentElement)
// flipCard(event.target.parentElement)



