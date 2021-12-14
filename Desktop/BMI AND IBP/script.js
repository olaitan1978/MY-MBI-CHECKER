let button= document.getElementById("bibi")
function wink(){
    let output=document.getElementById("outy")
    let name=document.getElementById("name").value
    let weight=parseFloat(document.getElementById("way1").value)
    let height=parseFloat(document.getElementById("way2").value)
    let result=Math.floor(weight/(height*height))
    if(!name|| !weight || !height){
        alert("non of the field must be left unfilled, thanks")
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