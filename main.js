window.addEventListener('DOMContentLoaded', () => {
    

const cards = [{
    name: 'emoji',
    img: 'image/image1.webp'
},
{
    name: 'coffe',
    img: 'image/image2.webp'
},
{
    name: 'sun',
    img: 'image/image3.webp'
},{
    name: 'emoji',
    img: 'image/image1.webp'
},
{
    name: 'coffe',
    img: 'image/image2.webp'
},
{
    name: 'sun',
    img: 'image/image3.webp'
}]

let score = document.querySelector('.score')
let button = document.getElementById('shuffle')
let box = document.querySelector('.box')
let cardChooseArray = [];
let cardChooseId = [];
let won = []
let result = 1

console.log(button)
//creer les cartes
function createCards() {
    for(let i = 0; i < cards.length; i++) {
        let card = document.createElement('img')
        card.setAttribute("src", 'image/color.jfif')
        card.setAttribute("data-id", i)
        card.className = 'box-img'
        card.addEventListener('click', displayCard)
        box.appendChild(card)
    }
}

function matchedOrNot() {
    let img = document.querySelectorAll('img')
    let imgOne = cardChooseId[0]
    let imgTwo = cardChooseId[1]
    
    if(cardChooseArray[0] === cardChooseArray[1]) {
        img[imgOne].classList.add('white')
        img[imgTwo].classList.add('white')
        won.push(imgOne, imgTwo)
        getWon()
    }
    else {
        img[imgOne].setAttribute('src', 'image/color.jfif')
        img[imgTwo].setAttribute('src', 'image/color.jfif')
    }
    cardChooseArray = []
    cardChooseId = []
}

//carte visible
function displayCard() {
    let cardId = this.getAttribute('data-id')
    this.setAttribute('src', cards[cardId].img)
    cardChooseArray.push(cards[cardId].name)
    cardChooseId.push(cardId)
    
    if(cardChooseArray.length === 2) {
            score.innerHTML =  'score:'+result++
            setTimeout(matchedOrNot, 500)
        }     
}

function getWon() {
    if (won.length === cards.length) {
        alert('you won')
    }
}

createCards()
cards.sort(()=> 0.5 - Math.random())
button.addEventListener('click', function(){
    document.location.reload()
    })
    
});