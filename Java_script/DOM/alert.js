function sayHello(){
    alert('Hello');
}
function sayBye(){
    alert('Byee!!')
}
var helloButton = document.getElementById('btn1');

helloButton.addEventListener('click', sayBye);
helloButton.addEventListener('click', sayHello);