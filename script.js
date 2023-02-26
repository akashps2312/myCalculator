var screen = document.querySelector('#screen') ;
var btn = document.querySelectorAll(".btnNum");

for (item of btn){
    item.addEventListener('click', (e)=> {
        btnText = e.target.innerText;
       if(btnText == "x")
{
    btnText = "*";
}
if(btnText=="÷"){
    btnText = "/";
}
        screen.value += btnText;
    })

}

function backSpace()
{
    screen.value =  screen.value.substr(0,screen.value.length-1);
}
function percentage(){
    screen.value = screen.value/100;
}

function fact(){
    
}