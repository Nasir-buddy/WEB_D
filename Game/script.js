var store = "";
for(var i = 0; i <= 149; i++){
    random = Math.floor(Math.random() * 10)
    store += `<div class="circle">${random}</div>`;
}
document.querySelector(".pannel-bottom").innerHTML = store;