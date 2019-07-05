
        
function agregar(){
    var texto= document.getElementById("entrada");
    var ul = document.getElementById("ul");

    var li=document.getElementById("li");
    var textowe=document.createTextNode(texto.value);

    li.appendChild(textowe);
    ul.appendChild(li);
}
