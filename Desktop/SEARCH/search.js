let y= document.getElementById("solo")
function bola(){
    let x= document.getElementById("sear").value
    if(x==='animal'){
        window.open("animal.html")
        
    }else if(x=='seyi'){
        window.open("seyi.html")
    }

}
y.addEventListener("click",bola)