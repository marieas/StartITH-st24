updateView()
function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    ${drawCars()}
    <button onclick="fixCarWSpecialist()">Choose car and mechanic</button>
    ${statusText}
    `
}

function drawCars(){
let html = '<ul>'

    for(let i = 0; i<cars.length; i++){
        html += `<strong><li>${cars[i].licencePlate}</li></strong>
        <li>${cars[i].color}</li>
        <li>${cars[i].make}</li>
        <li>${getErrorMessage(cars[i].errorId)}</li>
        <br>
        `
    }
    return html + '</ul>';
}

function getErrorMessage(errorId){
 return errors[errorId].errorType;
}