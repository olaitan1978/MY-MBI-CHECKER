let y= document.getElementById("solo")
function bola(){
    let x= document.getElementById("sear").value
    if(x==='animal kingdom'){
        window.open("animal.html")
        
    }else if(x=='seyi'){
        window.open("seyi.html")
    }else if(x==='google'){
        window.open('https://www.google.com.ng/')
    }else if(x==='greenlife'){
        window.open('https://www.greenlifepharmaceuticals.com/')
    }else if(x==='bill gate'){
        window.open('https://www.forbes.com/profile/bill-gates/?sh=41187b1e689f')
    }

}
y.addEventListener("click",bola)