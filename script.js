var timer = 120;
// var amount = 1000;
var myInterval;
var inputValue = 0;

// document.getElementById("myAmount").innerHTML = amount;

var items = document.querySelectorAll(".items");
var input = document.querySelectorAll(".amount");
var playerSelection = document.querySelectorAll("#result-box p");

let selectedArray =[];

let ckArray = ["Umbrella", "Football", "Sun", "Diya", "Cow", "Bucket", "Kite", "Pen" , "Flower", "Pigeon", "Butterfly", "Rabbit"];

function startTimer() {

    myInterval = setInterval(function () {
        if(timer>0){
            timer--;
            document.querySelector(".timer").textContent = timer;
        } else {
            playGame();
            // timer = 0;
            // document.querySelector(".timer").textContent = timer;
            clearInterval(myInterval);
        }
        

    }, 1000);
    
    document.getElementById("selection").style.opacity = 1;
    
}


items.forEach(function (item) {
    item.addEventListener("click", () => {
        var selectedItem = item.innerText;
        if(selectedArray.includes(selectedItem)) {
            return;
        } else {
            selectedArray.push(selectedItem);
        }
        
        document.querySelector(".player-selected").textContent = "You Selected : " + selectedArray.join(", ");
    })
});



function playGame() {
    clearInterval(myInterval);
    
    document.querySelector("#result-box").style.top = "50%";
    document.querySelector("#result-box").style.opacity = 1;
    document.querySelector(".top").style.opacity = 0.3;
    document.querySelector("#selection").style.opacity = 0.3;


    var random = Math.floor(Math.random()* 12);
    var randomResult = ckArray[random];

    playerSelection[0].textContent = "You Selected : " + selectedArray.join(", ");
    playerSelection[1].textContent = "Result : " + randomResult;

    if(selectedArray.includes(randomResult)) {
        document.querySelector("#result-text").textContent = "You Win!"
    } else {
        document.querySelector("#result-text").textContent = "You Lose, Better Luck Next Time!"
    }

}



function playAgain() {
    clearInterval(myInterval);

    selectedArray = [];
    document.querySelector(".player-selected").innerHTML = " ";
    document.querySelector(".timer").textContent = 120;
    document.querySelector("#result-box").style.opacity = 0;
    document.querySelector(".top").style.opacity = 1;
    document.querySelector("#selection").style.opacity = 0.5;
    document.querySelector("#result-box").style.top = "0%";

}

