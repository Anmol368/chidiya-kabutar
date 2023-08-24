var timer = 120;
var amount = 1000;
var myInterval;
var inputValue = 0;

document.getElementById("myAmount").innerHTML = amount;

var items = document.querySelectorAll(".items");
var input = document.querySelectorAll(".amount");
console.log(input);
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

        // if(selectedItem === "Umbrella") {
        //     var inputValue = input[0].value;
        // } else if(selectedItem === "Football") {
        //     var inputValue = input[1].value;
        // } else if(selectedItem === "Sun") {
        //     var inputValue = input[2].value;
        // } else if(selectedItem === "Diya") {
        //     var inputValue = input[3].value;
        // } else if(selectedItem === "Cow") {
        //     var inputValue = input[4].value;
        // } else if(selectedItem === "Bucket") {
        //     var inputValue = input[5].value;
        // } else if(selectedItem === "Kite") {
        //     var inputValue = input[6].value;
        // } else if(selectedItem === "Pen") {
        //     var inputValue = input[7].value;
        // } else if(selectedItem === "Flower") {
        //     var inputValue = input[8].value;
        // } else if(selectedItem === "Pigeon") {
        //     var inputValue = input[9].value;
        // } else if(selectedItem === "Butterfly") {
        //     var inputValue = input[10].value;
        // } else {
        //     var inputValue = input[11].value;
        // }

        if(selectedArray.includes({selectedItem : inputValue})) {
            return;
        } else {
            selectedArray.push({selectedItem : inputValue});
            console.log(selectedArray);
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

