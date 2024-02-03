var displayinput=document.getElementById("displayInput")
function getval(a){
    displayinput.value+=a;
}
function calculate(){
displayinput.value=eval(displayinput.value)
}
function clearAll(){
    displayinput.value="";
}