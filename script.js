var timer = 120;
var walletAmount = 1000;
var winningAmount = 0;
var lossAmount = 0;
var myInterval;
var inputValue = 0;
var selection;
var amount;
var child;

var wallet = document.getElementById("myAmount");
wallet.innerHTML = walletAmount;

var main = document.querySelectorAll(".items");
var items = document.querySelectorAll(".items-inner");
var input = document.querySelectorAll(".amount");
var inputMessage = document.querySelectorAll(".input-message");
var playerSelection = document.querySelector(".player-selection");
var resultPlayerSelection = document.querySelector(".result-player-selection");
var result = document.querySelector("#result-item");

let selectedArray =[];

let ckArray = ["Umbrella", "Football", "Sun", "Diya", "Cow", "Bucket", "Kite", "Pen" , "Flower", "Pigeon", "Butterfly", "Rabbit"];

function startTimer() {

    document.querySelector(".timer").innerHTML = 120;
    document.querySelector('#selection').style.pointerEvents = 'all';

    myInterval = setInterval(function () {
        if(timer>0){
            timer--;
            document.querySelector(".timer").textContent = timer;
        } else {
            playGame();
            clearInterval(myInterval);
        }  

    }, 1000);
    
    document.getElementById("selection").style.opacity = 1;
    
}


items.forEach(function (item, index) {
    item.addEventListener("click", () => {
        var selectedItem = item.innerText;

        child = item.nextElementSibling.value;

        if(child === "") {
            inputMessage[index].style.display = "block";
            return;
        } else {
            inputMessage[index].style.display = "none";
            var obj = {
                itemName: selectedItem,
                amount: child
            };
        }


        selection = selectedArray.map(function (el) { return el.itemName; });

        if(selection.includes(selectedItem)) {
            return;
        } else {
            selectedArray.push(obj);
        }

        amount = selectedArray.map(function (el) { return el.amount; });

        document.querySelector('#btn').style.pointerEvents = 'all';
        document.querySelector('#btn').textContent = 'Play';
        document.querySelector(".player-selected").style.display = "block";
        playerSelection.innerHTML += `${selectedItem} - ₹${child} | `;
        resultPlayerSelection.textContent += `${selectedItem}, `;
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

    result.textContent = "Result : " + randomResult;

    if(selection.includes(randomResult)) {

        const objArray = selectedArray.filter((ele) => {
            return ele.itemName === randomResult;
        });

        console.log(amount);
        
        winningAmount = objArray[0].amount;
        console.log(winningAmount);

        const index = amount.indexOf(winningAmount);
        amount.splice(index, 1);
        console.log(amount);
        
        amount.forEach((amnt) => {
            lossAmount += parseInt(amnt);
        });
        console.log(lossAmount);

        document.querySelector("#result-text").textContent = `You Won ₹${parseInt(winningAmount)*1.8}`
        walletAmount = walletAmount + parseInt(winningAmount)*1.8 - parseInt(lossAmount);
        wallet.innerHTML = walletAmount;
    } else {
        document.querySelector("#result-text").textContent = "You Lose, Better Luck Next Time!"
        console.log(amount);
        amount.forEach((amnt) => {
            lossAmount += parseInt(amnt);
        });
        console.log(lossAmount);
        walletAmount = walletAmount - parseInt(lossAmount);
        wallet.innerHTML = walletAmount;
    }

}



function playAgain() {
    clearInterval(myInterval);

    selectedArray = [];
    document.querySelector('#selection').style.pointerEvents = 'none';
    document.querySelector('#btn').style.pointerEvents = 'none';
    document.querySelector(".player-selected").style.display = "none";
    playerSelection.innerHTML = " ";
    resultPlayerSelection.innerHTML = " ";
    document.querySelector("#result-box").style.opacity = 0;
    document.querySelector("#result-box").style.top = "0%";
    document.querySelector(".top").style.opacity = 1;
    document.querySelector("#selection").style.opacity = 0.5;
    document.querySelector('#btn').textContent = 'Select To Play!';

    winningAmount = 0;
    lossAmount = 0;

    input.forEach(element => {
        element.value = '';
    });
}

