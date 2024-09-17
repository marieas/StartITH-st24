updateView();
function updateView(){
    document.getElementById('app').innerHTML = `
    ${drawPeople()}
    ${drawSearchArea()}
    ${drawSearchResult()}
    Update address<input onchange="addressUpdate(this.value)">
    Update person<input onchange="personToUpdate(this.value)">
     ${drawAgeSearchResult()}
    `
}
function drawSearchResult(){
    if(searchResult != ""){
        return `
       ${searchResult.name}
       ${searchResult.age}
       ${searchResult.address}
       `
    }
    else {
        return ''
    }
   
}
function drawPeople(){
    let html ='';

    people.forEach(person => {
        html += /*HTML*/`
        <div>${person.name}</div>
        <div>${person.age}</div>
        <div>${person.address}</div>
        <br>
        `
    } )

    return html;
}

function drawSearchArea(){
    return `
    <div>
    Name Search: <input onchange='setNameSearch(this.value)'>
    Age Search: <input onchange='setAgeSearch(this.value)'>
    </div>    
    `
}

function drawAgeSearchResult(){
    let html ='';

    if(ageResult != ""){
        ageResult.forEach(person => {
            html += /*HTML*/`
            <div>${person.name}</div>
            <div>${person.age}</div>
            <div>${person.address}</div>
            <br>
            `
        } )
    }     

    return html;
}