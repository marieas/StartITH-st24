//Model
let toys = ['bamse', 'lego', 'fidget spinner', 'hoppetau', 'He man', 'Bjarne']
let coinsInMachine = 0;
let purse = 100;
let prize = ''
let displayMessage = ''
// pause til 13.22
// index = plasseringen noe har i samlingen
// bamse har index = 0
// lego har index = 1
// arrayets lengde = 5 (hvor mange ting ligger der)

//View
updateView()
function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/ `
    ${displayToys()}
    <button onclick="addCoins(10)">10 kr</button>
    <button onclick="addCoins(20)">20 kr</button>
    <button onclick="addCoins(50)">50 kr</button>
    <div>Purse: ${purse}</div>
    <div>Coins in machine: ${coinsInMachine}</div>
    <button onclick="newGame()">Start game</button>    
    <div>${displayMessage}</div>
    <div>Prize: ${prize}</div>
    `
}

function displayToys(){
    let html = `` 

    // en tellevariabel (og startverdien den skal ha), 
    // en betingelse for hvor mange ganger løkken skal kjøre
    // hva skal skje med telleren for hver "runde" i løkken
    for(let i = 0; i < toys.length; i++){
        html += `<div>${toys[i]}</div>`
    }
    return html;
}

//Controller
function purseHasEnoughCoins(coinAmount){
  //Sjekke om du har nok penger til å legge inn
  if(purse < coinAmount){
    displayMessage = 'you dont have enough money!'
    return false
  }else{
     displayMessage = `you have inserted ${coinAmount}!`
    return true
  }
}

function newGame(){
    //får premie kun dersom det er over 5 kr på maskinen
    showPrize()
}

function genRandomNumber(){
    return Math.floor(Math.random() * toys.length)
}

function addCoins(coinAmount){
    let hasEnoughCoins = purseHasEnoughCoins(coinAmount)
    if(hasEnoughCoins){
        purse -= coinAmount;
        coinsInMachine += coinAmount;
    }
    updateView();   
}

function showPrize(){
    let randIndex = genRandomNumber();
    coinsInMachine -= 5;
    console.log('inrandIndex' + randIndex)
    prize += toys[randIndex] + ' ,';
    toys.splice(randIndex,1) //startindex på sletting, hvor mange elementer å slette?
    console.log('prize' + prize)
    updateView();
}

