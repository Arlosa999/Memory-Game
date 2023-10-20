//create an object that will store all cards from html 
const cards=document.querySelectorAll(".gamecard")

// empty arrays and objects 
let guess=[]
let timer;
const maxClicks = 50; // Maximum allowed clicks
const maxTimeInSeconds = 60; // Maximum allowed time in seconds
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
})

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
            }, 500); 
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
}

function resetGame() {
    const popUpWindow = document.getElementById("popUpWindowWin");
    popUpWindow.style.display = "none";
    const popUpWindowLose=document.getElementById("popUpWindowLose");
    popUpWindowLose.style.display="none";
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
        console.log("winTheGame")
    }
}

function loseGame(){
    console.log("Remaining Time:", remainingTime)
        console.log('lose the game')
        const loseTheGame=document.getElementById("popUpWindowLose")
        loseTheGame.style.display="block"
        clearInterval(timer)
}

shuffleCards()

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

