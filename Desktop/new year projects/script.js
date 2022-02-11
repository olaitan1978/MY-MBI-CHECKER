let table= document.getElementById("tabu")
let generator=document.getElementById("gen")
let dele=document.getElementById("del")
let submit=document.getElementById("suby")
let output= document.getElementById("outo")
let row=1
function solo(){
    let row=table.insertRow()
    let cell1= row.insertCell(0)
    let cell2= row.insertCell(1)
    let cell3= row.insertCell(2)
    let cell4= row.insertCell(3)
    let cell5= row.insertCell(4)
    let cell6= row.insertCell(5)
    let cell7= row.insertCell(6)
    row++
    let buy=document.getElementById("bu").value
    let desc=document.getElementById("des").value
    let quantity=document.getElementById("qu").value
    let rate=document.getElementById("rat").value
    let valu=document.getElementById("val").value
    let amount=document.getElementById("amo").value
    let balance=document.getElementById("bal").value

    let van=quantity*rate
    let balee=amount-van
    cell1.innerHTML=buy
   cell2.innerHTML=desc
   cell3.innerHTML=quantity
   cell4.innerHTML=rate
   cell5.innerHTML=van
   cell6.innerHTML=amount
   cell7.innerHTML=balee

   function seyi(){
    cell1.innerHTML=""
    cell2.innerHTML=""
    cell3.innerHTML=""
    cell4.innerHTML=""
    cell5.innerHTML=""
    cell6.innerHTML=""
    cell7.innerHTML=""
    output.innerHTML=""
 }
dele.addEventListener("click",seyi)
function kola(){
    let y= document.createElement("h3")
    y.innerText=buy+" you have ordered " +quantity+"BAGS of "+desc+ " which cost =N="+ rate+ " per one, the total amount is =N="+ van + " the amount received from you is =N="+ amount+" and your balance is =N=" +balee+". THANKS FOR YOUR PATRONAGE"
   output.appendChild(y)
 }
submit.addEventListener("click",kola)
 
}
generator.addEventListener("click",solo)
