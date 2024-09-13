updateView()
function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <img src="muffins.jpg" height='100px' onclick="addItem(this,1)">
    <div>Price: 20kr</div>
    <img src="cola.jpg" height='100px' onclick="addItem(this,2)">
    <div>Price: 30kr</div>
    <img src="banana.jpg" height='100px' onclick="addItem(this,0)">
    <div>Price: 50kr</div>
    <div>Items in shoppingcart: 
    ${drawShoppingCart()}
    </div>
    <button>Buy items</button>
    <div>Purse: ${purse} kr</div> 
    <div></div>
    `
}

function drawShoppingCart(){
    let html = ``;
   
    for(let i=0; i<shoppingCartImg.length; i++){
        console.log(shoppingCartIndex[i])
        let product = products[shoppingCartIndex[i]]
        console.log(product)
        html += /*HTML*/`<img src="${shoppingCartImg[i]}" height='100'>
        <div>${product}</div>
        `
    }

    return html;
}