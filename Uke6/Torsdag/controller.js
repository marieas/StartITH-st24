function addItem(imgElement, indexOfProduct){
    shoppingCartImg.push(imgElement.src)
    shoppingCartIndex.push(indexOfProduct)
    console.table(shoppingCartImg)
    updateView()
}

function removeItem(){

}

function checkOut(){

}

function sumPrice(){
    for(let i=0; i<shoppingCartIndex.length; i++)
    {
        totalPrice += prices[i];
    }
}