
// document.querySelector("button").addEventListener("click",handelclick);


// function handelclick(){
//     alert("button click!");
// }

//anoromos function the function which does not have name

// document.documentquerySelector("button").addEventListener("click", function(){
//     alert("button click!");
// });

var numberofdrumbutton = document.querySelectorAll(".drum").length;
for(var i=0; i<numberofdrumbutton; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        
        var buttoninternalHTML = this.innerHTML;
        makeSound(buttoninternalHTML);
        buttonAnimation(buttoninternalHTML);
    });

}
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.k);
});

function  makeSound(key){
    switch(key){
        case "A":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
        break;
        case "B":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
        break;
        case "C":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
        break;
        case "D":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
        break;
        case "E":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
        break;
        case "F":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
        break;
        case "G":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
        break;
        case "H":
            var audio = new Audio('sounds/tom-y.aac');
            audio.play();
        break;
        case "I":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
        break;
        case "J":
            var audio = new Audio('sounds/tom-o.aac');
            audio.play();
        break;
        case "K":
            var audio = new Audio('sounds/tom-y.aac');
            audio.play();
        break;
        case "L":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
        break;
        case "M":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
        break;
        case "N":
            var audio = new Audio('sounds/tom-n.aac');
            audio.play();
        break;
        case "O":
            var audio = new Audio('sounds/tom-o.aac');
            audio.play();
        break;
        case "P":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
        break;
        case "Q":
            var audio = new Audio('sounds/tom-snare.mp3');
            audio.play();
        break;
        case "R":
            var audio = new Audio('sounds/tom-r.aac');
            audio.play();
        break;
        case "S":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
        break;
        case "T":
            var audio = new Audio('sounds/tom-n.aac');
            audio.play();
        break;
        case "U":
            var audio = new Audio('sounds/tom-h.aac');
            audio.play();
        break;
        case "V":
            var audio = new Audio('sounds/tom-r.aac');
            audio.play();
        break;
        case "W":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
        break;
        case "X":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
        break;
        case "Y":
            var audio = new Audio('sounds/tom-z.aac');
            audio.play();
        break;
        case "Z":
            var audio = new Audio('sounds/tom-y.aac');
            audio.play();
        break;

        default:
            console.log(buttoninternalHTML);
    }       

}

function buttonAnimation(currentKey){
    var activeKey = document.querySelector("." + currentKey);
    activeKey.classList.add("pressed");

    setTimeout(function(){
        activeKey.classList.remove("pressed");
    },100);
}

