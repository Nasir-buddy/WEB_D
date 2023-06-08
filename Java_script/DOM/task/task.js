var box = document.getElementById('box');
var counter = document.getElementById('click-counter');
count = 0;
box.addEventListener('click', function(){
    count++;
    console.log(count);
    counter.innerText = count;
});