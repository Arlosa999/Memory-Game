//create an object that will store all cards from html 
const cards=document.querySelectorAll(".gamecard")
// empty array for flipping cards 
let guess=[]

let clickCount = 0;
let timer;
const maxClicks = 50; // Maximum allowed clicks
const maxTimeInSeconds = 10; // Maximum allowed time in seconds
let remainingTime = maxTimeInSeconds;

//buttons 
const resetButton = document.getElementById("resetbutton");
resetButton.addEventListener("click", resetGame);

const startAgain=document.getElementById("startAgain");
startAgain.addEventListener("click", resetGame)

const startAgainLose=document.getElementById("startAgainlose");
startAgainLose.addEventListener("click", resetGame)


const startGameButton=document.getElementById("play");
startGameButton.addEventListener("click", () => {
    console.log('startgame ran')
    startGame()
    // window.location = 'indexgame.html'
})

// Trucking 2 guesses so only 2 cards are flipping and if match they stay front-face if doesnr they turn back 

//create an event to add event listener to the card to flip when card is clicked 
cards.forEach(card => card.addEventListener('click',(e)=>{      //e-means event 

console.log(e.target.parentElement)
console.log(e.target.parentElement.dataset.id)

// function handleCardClick(e) {
if(!e.target.parentElement.classList.contains("flip")&& !e.target.parentElement.classList.contains("gameimages")) {
    e.target.parentElement.classList.toggle("flip")  //checking if card has been flipped 
    guess.push(e.target.parentElement.dataset.id)
    // clickCount ++;
    // if (clickCount > maxClicks || timerExpired()) {
    //     loseGame();
    // }
// }
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
function startGame(){
    console.log('start func')
    shuffleCards()
    const popUpStartWindow=document.getElementById("popUpWindowStart")
    popUpStartWindow.style.display = "none";
    updateTimerDisplay()
    startTimer()
    // removeEventListener('click', startGameButton, false)
}

function resetGame() {
    const popUpWindow = document.getElementById("popUpWindowWin");
    popUpWindow.style.display = "none";
    // Reset all cards to face down
    cards.forEach(card => {
        if (card.classList.contains("flip")) {
            card.classList.remove("flip");
        }
    });
    shuffleCards()
}

function updateTimerDisplay() {
    const timerDisplay = document.getElementById("timer");
    timerDisplay.textContent = remainingTime;
}

function shuffleCards() {
    const cardArray = Array.from(cards);
    cardArray.forEach(card => {
        const randomPosition = Math.floor(Math.random() * cardArray.length);
        card.style.order = randomPosition;
    });
}  

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

function loseGame(){
    console.log("Remaining Time:", remainingTime);
    if(remainingTime<=0){
        console.log('lose the game')
        const loseTheGame=document.getElementById("popUpWindowLose")
        loseTheGame.style.display="block"
    }

}

//figure out how to count each click 
//if you clicked more than 48 times you lose the game 
// if it took longer than 30 seconds to win the game you lose. 


shuffleCards()
// startGame()

//timer 
function startTimer() {
    remainingTime = maxTimeInSeconds;
    updateTimerDisplay(); // Initial display
    timer = setInterval(() => {
        remainingTime--;
        updateTimerDisplay();
        if (remainingTime <= 0) {
            loseGame();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function timerExpired() {
    return remainingTime <= 0;;
}

function resetClickCount() {
    clickCount = 0;
}


// console.log(event.target.parentElement)
// flipCard(event.target.parentElement)



