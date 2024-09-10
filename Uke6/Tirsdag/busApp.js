//Model

let newName = ''
let allNames = ['Kevin','Bethina','Kamilla','Christoffer','Ellie']
let randomName = ''

//View
updateView()
function updateView(){
 document.getElementById('app').innerHTML = /*HTML*/`
 <div>${printPeople()}</div>
 New Name: <input onchange="addName(this.value)">
 <button onclick="addNameToList()">Submit</button>
 <button onclick="throwUnderTheBus()">Kast Under BUSSSEN</button>
 <div>${randomName}</div>
 `
}

function printPeople(){
    let html = /*HTML*/`<ul class="printable-list">`;

    for(let counter=0; counter < allNames.length; counter++){
        html += /*HTML*/`
        <li>
        ${allNames[counter]}
        </li>
        `
    }
    html += '</ul>'
    return html;
}

//Controller
function addName(value){
    console.log(value)
    newName = value;
    updateView()
}

function addNameToList(){
    allNames.push(newName)
    updateView();
}

function generateNumber(){
    return Math.floor(Math.random() * allNames.length);
}

function throwUnderTheBus(){
    //Finne et tilfeldig navn som skal "kastes under bussen"
    //generere et tilfeldig nr som ikke er lengre enn listen
    let randIdx = generateNumber();
    randomName = allNames[randIdx]
    allNames.splice(randIdx,1)
 
   /*let indexOFRandomNAme = allNames.findIndex((name) => name == randomName)
    let indexOFRandomNAme2 = allNames.indexOf(randomName)*/


    //console.log(indexOFRandomNAme2)
    console.log(randIdx)
    updateView()
    //nr skal brukes som INDEX for å hente noe ut av arrayet

}
