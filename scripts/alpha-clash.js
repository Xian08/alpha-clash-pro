//function play(){
   // const homeSection = document.getElementById('home-screen');
   // homeSection.classList.add('hidden')
    
   // const playgroundSection = document.getElementById('play-ground');
  //  playgroundSection.classList.remove('hidden')
//}
function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    if(playerPressed === expectedAlphabet){
        console.log('you get a point');
    //    const currentScoreElement = document.getElementById('current-score');
    //    const currentScoreText = currentScoreElement.innerText;
    //    const currentScore = parseInt(currentScoreText);
    //    console.log(currentScore);
    //    const newScore = currentScore + 1;
    //    currentScoreElement.innerText = newScore;


    const currentScore = getTextElementValueById('current-score');
    const updatedScore = currentScore + 1;
    setTextElementValueById('current-score', updatedScore);

        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    } else{
        console.log('you misssed, you lost a life');
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife === 0){
            gameOver();
        }

        
        
        //get current life number.
// const currentLifeElement = document.getElementById('current-life');
// const currentLifeText = currentLifeElement.innerText;
// const currentLife = parseInt(currentLifeText);


//         //reduce the life count
// const newLife = currentLife - 1;

//         //display the updated life
//         currentLifeElement.innerText = newLife;
    }
}

//captured keyboard button pressed
document.addEventListener('keyup', handleKeyboardButtonPress)

function continueGame(){
// generate random
const alphabet = getARandomAlphabate();
//console.log('your random alphabate', alphabet);

const currentAlphabetElement = document.getElementById('current-alphabet');
currentAlphabetElement.innerText = alphabet;

setBackgroundColorById(alphabet);
}


function play(){
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame()
}

function gameOver(){
   hideElementById('play-ground');
   showElementById('final-score');
   const lastScore = getTextElementValueById('current-score');
   console.log(lastScore);
   setTextElementValueById('last-score', lastScore);

   const currentAlphabet = getElementTextById('current-alphabet');
   removeBackgroundColorById(currentAlphabet);

}