function setNameSearch(name){
    searchName = name;
    searchByName()
}

function setAgeSearch(age){
    ageSearch = age;
    searchByAge()
}

function searchByName(){

    for(let i = 0; i<people.length; i++){

        console.log(people[i])

        if(people[i].name.includes(searchName))
        {
            searchResult = people[i]
        }
    }
    updateView()
}

function addressUpdate(newAddress){
    addressUpdated = newAddress;
}

function personToUpdate(person){
    searchName = person;
    searchByName()
    personUpdate = searchResult
    personUpdate.address = addressUpdated;
    updateView()
}

function searchByAge(){ 
    //ageResult = people.filter(person => person.age >= ageSearch)
    let tempArray = [];

    people.forEach(person => {
        if(person.age >= ageSearch){
            tempArray.push(person);
        }
    })

    ageResult = tempArray;

    updateView()
}

/*function searchByAgeForLoop(){
    for(let i = 0; i<people.length; i++){

        console.log(people[i])

        if(people[i].age >= ageSearch)
        {
            ageResult.push(people[i])
        }
    }
    updateView()
}*/