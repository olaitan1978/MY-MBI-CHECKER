let button= document.getElementById("bibi")
function wink(){
    let output=document.getElementById("outy")
    let name=document.getElementById("name").value
    let weight=parseFloat(document.getElementById("way1").value)
    let height=parseFloat(document.getElementById("way2").value)
    let result=Math.floor(weight/(height*height))
    if(!name|| !weight || !height){
        alert("you are not allowed to leave any of the field unfilled, thanks")
        return;
    }
    if(result<18){
        output.innerHTML=(name+ " YOUR BMI IS: " + result+" WHICH SHOWS THAT YOU ARE UNDERWEIGHT")
    }else if(result<=25){
        output.innerHTML=(name+ " YOUR BMI IS: " + result+" WHICH SHOWS THAT YOUR BMI IS NORMAL")

    }else{
        output.innerHTML=(name+ " YOUR BMI IS: " + result+" WHICH SHOWS THAT YOU ARE OVERWEIGHT")
    }
  
  

}
button.addEventListener("click",wink)

setInterval(lara,500)
function lara(){
    let array=['JUMIA CHRISTMAS SALE','Dec 6- 19','Grant deals, just in time for xmas']
    let outi=document.getElementById("outo")
    let randi=array[Math.floor(Math.random()*array.length)]
    outi.innerHTML=randi
}