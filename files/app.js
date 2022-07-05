var c = 0;
function btn (){
    
var  a =  parseInt(document.getElementById('price').innerHTML)
var  b = parseInt(document.getElementById('numofproduct').value)
c = (a*b)
document.getElementById('totalPrice').innerHTML = c
} 


function add (){
    console.log(c);
    document.getElementById('dis').innerHTML = `<div class="productSec1Box"> 
    <h1>product 1</h1>
    <h2 >price <span id="price" >5000</span></h2>
    <p id="totalPrice">${c}</p>
    <button >Remove</button>  
</div>`
}