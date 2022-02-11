let imogi=['read','black','pink','purple','orange','brown','blue']
let fron= ['image/shoe1.jpg','image/shoe2.jpg','image/shoe3.jpg','image/shoe4.jpg','image/shoe5.jpg','image/shoe6.jpg','image/shoe7.jpg','image/shoe8.jpg','image/shoe9.jpg','image/shoe10.jpg','image/shoe11.jpg','image/shoe12.jpg']
let output =document.querySelector(".outi")
let outputy =document.querySelector('.out2')
let array= ['COME AND PATRONIZE US........ ', ' WE ARE OFFERING 100% DISCOUNT',"WHY WASTING TIME"]
let count=0
setInterval(seyi,1100)
function seyi(){
    let rando= array[Math.floor(Math.random()*array.length)]
    output.innerHTML=rando
    let rando2= imogi[Math.floor(Math.random()*imogi.length)]
    outputy.style.backgroundColor=rando2
    let meme= document.getElementById("gimmy")
    meme.setAttribute("src",fron[count]);
    count++
 if(count>11){
     count=0
 }

}
