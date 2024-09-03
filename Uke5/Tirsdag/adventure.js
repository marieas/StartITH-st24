//Model

let name = 'Bjarne';
let health = 100;
let bjarneStr = 30;
let energy = 100;
let gold = 0;
let monstrStr = 20;
let monstrHealth = 40;
let eventMessage = 'Bjarne is chillin`'

//Controller
function bjarneHitsMonster(){
    monstrHealth -= bjarneStr
    console.log('bjarnefunct: monster' + monstrHealth )
    if(isMonsterDead() == true){
        eventMessage = 'Bjarne conqured the monster!'
        return true;
    }else{
        return false;
    }
    
}

function monsterHitsBjarne(){
    health -= monstrStr
    // hvem døde?
    let bjarneDead = isBjarneDead();
    if(bjarneDead == true){
        eventMessage = 'Bjarne is dead! BAM BAM BAAAAAAAA'        
    }
    else{       
        eventMessage = /*HTML*/ 
        `<div>Bjarne is alive </div>
        <button onclick="MonsterFight()">Hit monster</button>`
    }
    updateView();
}

function lookForTreasure(){
    // 50% for at han finner skatt
   let treasureSuccessNum = Math.floor(Math.random() * 2) + 1 // 1, 2 
   //2 = success
   if(treasureSuccessNum == 2){
      eventMessage = 'Bjarne found gold!'
      getAmountOfGold()
      //?
   }
   else{
    eventMessage = /*HTML*/ `
    <div>Bjarne encountered a monster  </div>
    <button onclick="MonsterFight()">Hit monster</button>
    `
    //monsterfight
   }
   updateView()
    // oppdatere tekst
}

function getAmountOfGold(){
    let tressureamount = Math.floor(Math.random() * 40) + 11
    console.log(tressureamount)
    gold += tressureamount
    //gold = gold + tressureamount;
}

function MonsterFight(){
    console.log('monster fight - monster health: ' + monstrHealth)
    if(isMonsterDead() == false){
    // monster mister liv
        console.log('bjarne hits monster')
        let bjarneKilledMonster = bjarneHitsMonster();
        if(bjarneHitsMonster){
            updateView()
            return
        }
        else{
            console.log('monster new health: ' + monstrHealth)
            // monster slår bjarne tilbake
            monsterHitsBjarne()
        }
        
    }   
    else{
        eventMessage = 'Bjarne conqured the monster!'
        updateView()
    }   
    
}

function isBjarneDead(){
    if(health >= 1 ){
        return false;
    }else{
        return true;
    }
}

function isMonsterDead(){
    if(monstrHealth >= 1 ){
        return false;
    }else{
        return true;
    }
}

//View
updateView()
function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <div>Name: ${name}</div>
    <div>Energy: ${energy}</div>
    <div>Gold: ${gold}</div>
    <div>Health: ${health}</div>
    <button onclick="lookForTreasure()">Look for treasure</button>
    <div>${eventMessage}<div>
    <div>Monster</div>
    <div>Health: ${monstrHealth}</div>
    `
}