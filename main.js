
document.addEventListener('DOMContentLoaded',() => {
    

const cardArray = [
{
    name: 'Fries',
    img: 'picture/Fries.png'
    
},
{
    name: 'Fries',
    img: 'picture/Fries.png'
},
{
    name: 'Chips',
    img: 'picture/Chips.png'
},
{
    name: 'Chips',
    img: 'picture/Chips.png'
},
{
    name: 'Milk',
    img: 'picture/Milk.png'
},
{
    name: 'Milk',
    img: 'picture/Milk.png'
},
{
    name: 'Pizaa',
    img: 'picture/Pizaa.png'
},
{
    name: 'Pizaa',
    img: 'picture/Pizaa.png'
},
{
    name: 'Icecream',
    img: 'picture/Icecream.png'
},
{
    name: 'Icecream',
    img: 'picture/Icecream.png'
},
{
    name: 'Biscuits',
    img: 'picture/Biscuits.png'
},
{
    name: 'Biscuits',
    img: 'picture/Biscuits.png'
}
]
cardArray.sort(() => 0.5 - Math.random() );




const grid = document.querySelector('.grid')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []
var refresh = window.location.reload
var count = document.querySelector('#time')

var audio = new Audio("sound/open.wav");
var audio2 = new Audio("sound/wrong.wav");
var audio3 = new Audio("sound/right.wav")
var audio4 = new Audio("sound/success.wav")
var nwin ;


let timeLeft ;
/*
if(nwin == null){
    timeLeft = 40;
}
else
{
    timeLeft = 30;
}*/

var TimeC  = "false";

//localStorage.setItem("TimeC","false")
TimeC = localStorage.getItem("TimeC");



    //TimeC = localStorage.getItem("TimeC");
    if(TimeC == "false"){
        timeLeft = 40  
    }
    else{
        timeLeft = 30
    }
 


  
 





const soundOn = localStorage.getItem("sound");

setTimeout(function countDown() {
  

    setInterval(function() {
        if(timeLeft <= 0) {
            
           clearInterval(timeLeft = 1)
           alert('Sorry Time is over :( Try again')

            setTimeout(window.location.reload.bind(window.location), 2000);
        }
        count.innerHTML = timeLeft
        timeLeft -=1
    
    }, 1000)
}, 2000)

function coverGame(){
    for (let i = 0; i < cardArray.length; i++) {
   var pictBlank = document.createElement('img')
   
   pictBlank.setAttribute('src','picture/Gi.png')
   pictBlank.setAttribute('data-id', i)
  
   pictBlank.addEventListener('click',flipPicture)
   grid.appendChild(pictBlank)
     //pictBlank.style.width = '250px';
   //pictBlank.style.height = '320px';

    }
}
// check for match 
function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {

    if(optionOneId == optionTwoId) {
      
      alert('Sorry', 'You have clicked the same image! :(', 'error') 
    
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
        if(soundOn == "on"){
            audio3.play();}
      //swal('Great', 'You found a match', 'success')
      //cards[optionOneId].setAttribute('cardsChosen.img')
      //cards[optionTwoId].setAttribute('cardsChosen.img')
      cards[optionOneId].removeEventListener('click', flipPicture)
      cards[optionTwoId].removeEventListener('click', flipPicture)
      cardsWon.push(cardsChosen) 

    }
    } else {
        if(soundOn == "on"){
            audio2.play();}
               
      cards[optionOneId].setAttribute('src', 'picture/Gi.png')
      cards[optionTwoId].setAttribute('src', 'picture/Gi.png')
      
      //document.getElementById('alert').style.display = 'block'
      alert('Focus') 
    }
    cardsChosen = []
    cardsChosenId = []
        
		//resultDisplay.textContent = cardsWon.length
		if  (cardsWon.length === cardArray.length/2) {
           localStorage.setItem("TimeC","true")
           TimeC = localStorage.getItem("TimeC")
          //nwin = 1;
          audio4.play();    
		  alert('You found them all!', 'Score ' + timeLeft  , 'success');
          alert('next level');
          
        
        
            
          //timeLeft - 10
		  //resultDisplay.textContent = 'Congratulations! You found them all!'
          clearInterval(timeLeft)
		  setTimeout(window.location.reload.bind(window.location), 5000);
		}
	    

	}   

/*function checkForMatch() 
{
    var cards = document.querySelectorAll('img')
    const firstId = cardsChosenId[0]
    const secondId = cardsChosenId[1]

    if(cardsChosen[0] === cardsChosen[1]){

    
    if(firstId == secondId)
    {
        swal('try again')
    // cards(firstId).setAttribute('src','cardsChosen.img')
    // cards(secondId).setAttribute('src','cardsChosen.img')
    }

   else if(cardsChosen[0] === cardsChosen[1])
    {
        swal("you found a match")
    // cards(firstId).setAttribute('src','cardsChosen.img')
    // cards(secondId).setAttribute('src','cardsChosen.img')
    cards[firstId].removeEventListener('click',flipPicture)
    cards[secondId].removeEventListener('click',flipPicture)
     cardWon.push(cardsChosen)
    }
    }
    else
    {
        swal("try again")
    }

    cardsChosen = []
		cardsChosenId = []
		resultDisplay.textContent = cardWon.length
		if  (cardWon.length === cardArray.length/2) {
		  swal('You found them all!', 'Score ' + timeLeft  , 'success');
		  //resultDisplay.textContent = 'Congratulations! You found them all!'
		  setTimeout(window.location.reload.bind(window.location), 5000);
		}

}

*/

//flip cards
function flipPicture() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(soundOn == "on"){
        audio.play();}
           

    if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500)
    }

}

coverGame()

})