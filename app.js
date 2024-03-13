const header = document.querySelector(".head");
const img = document.querySelector(".tossappimg");

function tossapp(head){
const input = Math.floor(Math.random() * 2)
console.log(input);





if(input === 0){
    img.src = "https://www.foreigncurrencyandcoin.com/wp-content/uploads/2018/12/products-18814.jpg";
}else{
    img.src = "https://en.numista.com/catalogue/photos/pakistan/424-original.jpg";
}
}

if(tossapp === 'head' && input === 0 || tossapp === 'tail' && input === 1 ){
    header.innerHTML = 'tails wins';
}else{
    header.innerHTML = 'head wins';
}