let apple = 'apple';
let banana = 'banana';
let grapes = 'grapes';

let fruit = ['apple', 'banana','grapes' ]

//Pause til 12.56

updateView()
function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    ${drawDivs()}
    ${drawDivsWithWhileLoop()}
    `
}

function drawDivs(){
    let htmlStr = ``;
    // en tellevariabel (og startverdien den skal ha), 
    // en betingelse for hvor mange ganger løkken skal kjøre
    // hva skal skje med telleren for hver "runde" i løkken
    for(let counter = 2; counter <= 10; counter +=2){
        htmlStr += `<div>${counter}</div>`
    }
    return htmlStr;
}

function drawDivsWithWhileLoop(){
    let number = 1;
    let html = ``;
    // en betingelse for hvor mange ganger løkken skal kjøre
    while(number <= 5){
        html += `<div>${number}</div>`
        console.log('value of html str' + html)
        number++;
    }
    return html;

}


