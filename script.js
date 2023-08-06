let textbox = document.getElementById("txtbx");
textbox.addEventListener('input', function(){
    var text = this.value;
    let char = text.length;
    document.getElementById("ch").innerHTML = char;

    text = text.trim();  //used to remove spaces at the end and the the very begininng position
    let words = text.split(" ");   // kisi word ko todna 

    let cleanList = words.filter(function(elm){   //filter function is used to filter the array ,,like to remove extra spaces
        return elm!= "";   
    });

    document.getElementById("word").innerHTML = cleanList.length;
});

let clear = document.getElementById("clear");
let word = document.getElementById("word");
let ch = document.getElementById("ch");
let newtxt = document.getElementById("txtbx");
clear.addEventListener('click',function(){
    newtxt.value = '';
    word.innerHTML = '0';
    ch.innerHTML = '0';
})