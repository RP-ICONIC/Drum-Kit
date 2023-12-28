
var n = document.querySelectorAll(".drum").length;

for(var i=0 ; i<n ; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        pressAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    pressAnimation(event.key);
});

function makeSound(key)
{
    switch(key)
    {
        case "w":
            var s1 = new Audio("Roland R-8/R8-808-1.wav");
            s1.play();
            break;

        case "a":
            var s2 = new Audio("Roland R-8/R8-Cl-Hi-Hat.wav")
            s2.play();
            break;

        case "s":
            var s3 = new Audio("Roland R-8/R8-Conga.wav")
            s3.play();
            break;

        case "d":
            var s4 = new Audio("Roland R-8/R8-Crash.wav")
            s4.play();
            break;
                
        case "j":
            var s5 = new Audio("Roland R-8/R8-Hi-Tom.wav")
            s5.play();
            break;

        case "k":
            var s6 = new Audio("Roland R-8/R8-Low-Tom.wav")
            s6.play();
            break;

        case "l":
            var s7 = new Audio("Roland R-8/R8-Snare-5.wav")
            s7.play();
            break;

        default: console.log(key);
    }
}

function pressAnimation(key)
{
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100)

}