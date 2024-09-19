/*Pause til 13.24*/

//Get random mechanic code:

function getRandomMechanicIndex(){
    return Math.floor(Math.random() * mechanics.length)
}

function fixCar(){
    statusText = cars[0].licencePlate + 'is being fixed by ' +
    mechanics[getRandomMechanicIndex()]
    cars.splice(0,1)
    updateView()
}

//get spesific mechanic code:

function getSpecialist(carTofix){
    //finn en mechanicer som jobber med feilen bilen har

    //gjør et søk i mechanics arrayet for å finne en mekaniker som matcher 
    //sin spesialistområde med tilsvarene feil bilen har
   let foundMechanic = mechanics.find(mechanic => mechanic.specialisterror == carTofix.errorId);
   console.table(foundMechanic)
   return foundMechanic;

}

function didFUp(){
    let success = Math.floor(Math.random()*2);
    if(success == 0)
    {
        return true;
    }
    else 
    {
        return false;
    }
}

function fixCarWSpecialist(){

    //vite hvilken bil vi jobber med
    let carTofix = cars[0];
    //finne mekanikern basert på feilen til bilen
    let mechanic = getSpecialist(carTofix)
    if(mechanic.trainee == true && didFUp()){
        statusText = `${carTofix.licencePlate} destroyed by ${mechanic.name}`;
    }
    else{
        statusText = `${carTofix.licencePlate} fixed by ${mechanic.name}`;
    }

    cars.splice(0,1)
    //oppdatere status text

    updateView()
}