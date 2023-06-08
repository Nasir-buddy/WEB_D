var outerdiv = document.getElementById('outer');

outerdiv.addEventListener('mouseover', function(){
    console.log('Mouse over');
});
outerdiv.addEventListener('mouseout', function(){
    console.log('Mouse Out');
});

var searchinput = document.getElementById('search');
searchinput.addEventListener('keypress', function(){
    console.log('Key Pressed');
});