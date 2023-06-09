var innerDiv = document.getElementById('inner-div');
innerDiv.addEventListener('click' , function(){
    console.log('Click Inner Div');
});
var outerDiv = document.getElementById('outer-div');
outerDiv.addEventListener('click', function(){
    console.log('Click Outer Div');
});
document.addEventListener('click' , function(){
    console.log('click document');
});