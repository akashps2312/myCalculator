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
    if(screen.value===0 || screen.value===1)return 1;
    for(var i= screen.value -1; i >=1; i--)
    {screen.value *=i; }
    return screen.value;
    
}