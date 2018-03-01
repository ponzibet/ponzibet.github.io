var contractABI = JSON.parse('[{"constant":true,"inputs":[],"name":"totalBalanceDown","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"downBetRecords","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pyramid","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_bet","type":"bool"}],"name":"enterRound","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"totalBalanceUp","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getUserBet","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_contract","type":"address"}],"name":"changeContractAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"minBet","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"upBetRecords","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"endPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getUserBalances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getUserBalancesLastBet","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_minBet","type":"uint256"}],"name":"changeMinBet","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdrawFromFeeBalance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"roundTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"startPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"contractAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"placeBet","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]');
var referencedContractABI = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"}],"name":"withdrawOld","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"sellPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"ethervalue","type":"uint256"}],"name":"getTokensForEther","outputs":[{"name":"tokens","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"payouts","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"dividends","outputs":[{"name":"amount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"buyPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"contractBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"reinvestDividends","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"getMeOutOfHere","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"fund","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"tokens","type":"uint256"}],"name":"getEtherForTokens","outputs":[{"name":"ethervalue","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"ethervalue","type":"uint256"},{"name":"subvalue","type":"uint256"}],"name":"calculateDividendTokens","outputs":[{"name":"tokens","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sellMyTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"tokenBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"}]');
var referencedContract;
var ponziContract;
var downChart;
var upChart;
var placingTime = true;
var secondsLeft = 0;
var gameActive = false;
var betUp = false;
var userBet = 0;
var startedInterval = false;

$(document).ready(function() {
    drawEmptyCharts();
    // clicked the bet btn below the down pool
    $("#betDown").click(function() {
        betUp = false;
    });
    $("#sendButton").click(function() {

        if (betUp) {
            console.log("up bet")
            upBetDeposit();
        } else {
            console.log("down bet")
            downBetDeposit();
        }
    });
    // clicked the bet btn below the up pool
    $("#betUp").click(function() {
        betUp = true;
    });
    $("#claimButton").click(function() {
        //claim bet
        claimBet();
    });
    web3.eth.getAccounts(function(err, val) {
        console.log(val);
        if (val.length === 0) {
            alert();
        } else {
            ponziContract = web3.eth.contract(contractABI).at('0x485b224c97ad56dc5b145eafdee71a7b5163f735');
            referencedContract = web3.eth.contract(referencedContractABI).at('0x2fa0ac498d01632f959d3c18e38f4390b005e200');
            if (ponziContract) {
                getContractAddress(showCurrentContract);

                setInterval(function() {
                    getUpBetRecords(0, []);
                    getDownBetRecords(0, []);
                    getLivePrice()
                    getMultiplier();
                    getStartPrice(showStartPrice);                    
                    getRoundStartTime(syncTimer);
                }, 5000);
            }
        }
    });
});

function getLivePrice() {
    referencedContract.buyPrice.call(function(err,val) {
        $("#currentPrice").text("Live Ponzi Price: " + parseInt(val)/1e18);
    });        
}                                                         
                                                         
function getUpBetRecords(index, upBetArray) {
    ponziContract.upBetRecords.call(index, function(err, val) {
        val = parseInt(val);
        if (index === 0 && val === 0) {
            console.log(upBetArray, "done");
            updateUpPoolChart(upBetArray);
        } else if (index !== 0 && val === 0) {
            console.log(upBetArray, "done");
            updateUpPoolChart(upBetArray);
        } else {
            currentIndex = index;
            index++;
            upBetArray.push(val);
            getUpBetRecords(index, upBetArray);
        }
    });
}

function getDownBetRecords(index, downBetArray) {
    ponziContract.downBetRecords.call(index, function(err, val) {
        val = parseInt(val);
        if (index === 0 && val === 0) {
            console.log(downBetArray, "done");
            updateDownPoolChart(downBetArray);
        } else if (index !== 0 && val === 0) {
            console.log(downBetArray, "done");
            updateDownPoolChart(downBetArray);
        } else {
            currentIndex = index;
            index++;
            downBetArray.push(val);
            getDownBetRecords(index, downBetArray);
        }
    });
}

function getContractAddress(callback) {
   ponziContract.contractAddress.call(function(err, val) {
        callback(val);
    });
}

function getMultiplier() {
    ponziContract.totalBalanceUp.call(function(err, val) {
        ponziContract.totalBalanceDown.call(function(err1, val1) {
            let multiplierUp = 1 + parseInt(val1)/parseInt(val);
            let multiplierDown = 1 + parseInt(val)/parseInt(val1);
            $("#multiplierUp").text("Multiplier (If Up Wins): " + multiplierUp);
            $("#multiplierDown").text("Multiplier (If Down Wins): " + multiplierDown);
        })
    })
}
                                                                              
//Places a down bet
function downBetDeposit() {
    let myData = ponziContract.enterRound.getData(false);
    let downBetValue = parseInt(parseFloat($("#betAmountInput").val()) * 1e18);
    let Tx = {
        from: web3.eth.accounts[0],
        to: ponziContract.address,
        data: myData,
        value: downBetValue,
        gasPrice: 5000000000
    };
    web3.eth.sendTransaction(Tx, function(err,transactionHash) {
        if (!err) {
            alert("Transaction Hash: ", transactionHash);
        }
    });
}

//Places an up bet
function upBetDeposit() {
    console.log(parseInt($("#betAmountInput").val()));
    console.log("address: ", ponziContract.address);
    let myData = ponziContract.enterRound.getData(true);
    console.log(parseInt($("#betAmountInput").val()) * 1e18);
    let upBetValue = parseInt(parseFloat($("#betAmountInput").val()) * 1e18);
    let Tx = {
        from: web3.eth.accounts[0],
        to: ponziContract.address,
        data: myData,
        value: upBetValue,
        gasPrice: 5000000000
    };
    web3.eth.sendTransaction(Tx, function(err,transactionHash) {
        if (!err) {
            alert("Transaction Hash: ", transactionHash);
        }
    });
}

function changeContractAddress(a) {
    let address = a;
    let Tx = {
        from: web3.eth.accounts[0],
        to: ponziContract.address,
        data: ponziContract.changeContractAddress.getData(address),
        gasPrice: 5000000000
    };
    ponziContract.changeContractAddress(Tx, function(err,transactionHash) {
        if (!err) {
            alert("Transaction Hash: ", transactionHash);
        }
    });
}

function claimBet() {
    let Tx = {
        from: web3.eth.accounts[0],
        to: ponziContract.address,
        gasPrice: 5000000000
    };
    ponziContract.placeBet(Tx, function(err,transactionHash) {
        if (!err) {
            alert("Transaction Hash: ", transactionHash);
        }
    });
}

function getUserBet(callback) {
    ponziContract.getUserBet.call(function(val, err) {
        if (!err) {
            userBet = val;
            callback(val);
        } else {
            console.log(err);
        }
    });
}

function getUserBalance(up) {
    ponziContract.getUserBalances.call(function(val, err) {
        if (!err) {
            getOwnBet(up);
            return val;

        } else {
            console.log(err);
        }
    });
}

function getStartPrice(callback) {
    ponziContract.startPrice.call(function(err, val) {
        if (!err) {
            callback(parseInt(val)/1e18);
            return val;
        } else {
            console.log(err);
        }
    });
}

function getEndPrice(callback) {
    ponziContract.endPrice.call(function(err, val) {
        if (!err) {
            callback(parseInt(val)/1e18);
            return val;
        } else {
            console.log(err);
        }
    });
}

function showStartPrice(price) {
    console.log(price);
    $("#startPrice").text("Start price: " + price + " ETH");
}

function showEndPrice(price) {
    console.log(price)
    $("#endPrice").text("End price: " + price + " ETH");
}

function getRoundStartTime(callback) {
    ponziContract.roundTime(function(err, val) {
        if (!err) {
            $("#currentRound").text("Round Start (Rounds Last 30 mins): " + (new Date(parseInt(val)*1000)).toGMTString());
            let status;
            let inequality = parseInt(Date.now()/1000) > parseInt(val) + (30*60);
            console.log(inequality);
            if(inequality ? status = "Expired (Start New Round By Placing Bet)" : status = "Active") {
              $("#roundStatus").text("Round Status: " + status);
            }
            if (1800 - ((Date.now() / 1000) - parseInt(val)) < 0) {
                gameActive = false;
                callback(1800);
            } else {
                callback(1800 - ((Date.now() / 1000) - parseInt(val)));
                gameActive = true;
            }
            return val;

        } else {
            console.log("err");
        }
    });
}

//Shows the contract address the current game bets on
function showCurrentContract(contractAddress) {
    $("#contractAddress").text("Betting on contract: " + contractAddress);
    getRoundStartTime(syncTimer);

}
//updates the timer on the progress bar every second to present the time left for the current placing/claiming phase
function moveTimer() {
    if (gameActive) {
        secondsLeft--;
        if (secondsLeft <= 0) {
            $("#title").text("Place your bets now!");
            placingTime = true;
            secondsLeft = 1800;
            drawEmptyCharts();
            isGameActive(false);
        }
        if (secondsLeft == 900) {
            placingTime = false;
            $("#title").text("Claim your bets now!");
            $("#claimButton").css("display", "inline-block");
            $("#betDown").css("display", "none");
            $("#betUp").css("display", "none")
        }
        if (placingTime) {
            if (secondsLeft < 1500 && secondsLeft % 60 < 10) {
                $("#prog").text("0" + Math.floor((secondsLeft - 900) / 60) + ":0" + parseInt(secondsLeft % 60));
            } else if (secondsLeft < 1500 && secondsLeft % 60 >= 10) {
                $("#prog").text("0" + Math.floor((secondsLeft - 900) / 60) + ":" + parseInt(secondsLeft % 60));
            } else if (secondsLeft >= 1500 && secondsLeft % 60 < 10) {
                $("#prog").text(Math.floor((secondsLeft - 900) / 60) + ":0" + parseInt(secondsLeft % 60));
            } else if (secondsLeft >= 1500 && secondsLeft % 60 >= 10) {
                $("#prog").text(Math.floor((secondsLeft - 900) / 60) + ":" + parseInt(secondsLeft % 60));
            }
            $("#prog").css("width", ((secondsLeft - 900) / 900) * 100 + "%");
        } else {

            if (secondsLeft < 600 && secondsLeft % 60 < 10) {
                $("#prog").text("0" + Math.floor(secondsLeft / 60) + ":0" + parseInt(secondsLeft % 60));
            } else if (secondsLeft < 600 && secondsLeft % 60 >= 10) {
                $("#prog").text("0" + Math.floor(secondsLeft / 60) + ":" + parseInt(secondsLeft % 60));
            } else if (secondsLeft >= 600 && secondsLeft % 60 < 10) {
                $("#prog").text(Math.floor(secondsLeft / 60) + ":0" + parseInt(secondsLeft % 60));
            } else if (secondsLeft >= 600 && secondsLeft % 60 >= 10) {
                $("#prog").text(Math.floor(secondsLeft / 60) + ":" + parseInt(secondsLeft % 60));
            }
            $("#prog").css("width", ((secondsLeft) / 900) * 100 + "%");
        }
    }


}
//shows start reference price when first bet is confirmed
function showStartPrice(startPrice) {
    $("#startPrice").text("Start price: " + startPrice + " ETH");
    getEndPrice(showEndPrice);
}

function showEndPrice(endPrice) {
    $("#endPrice").text("End price: " + endPrice + " ETH");
}

function getOwnBet(upPool) {
    if (userBet > 0) {
        console.log("getOwnBet " + userBet);
        var newBetArray = [];
        var newColorsArray = [];
        newColorsArray.push("#90C3D4");
        newBetArray.push(userBet);
        var upDupe = false;
        var downDupe = false;
        if (upPool) {

            for (var i = 1; i < upChart.data.datasets[0].data.length; i++) {
                if (upChart.data.datasets[0].data[i] == userBet) {
                    if (upDupe) {
                        newBetArray.push(upChart.data.datasets[0].data[i]);
                    } else {
                        upDupe = true;
                    }
                }

            }
            upChart.data.datasets[0].data = newBetArray;
            for (var i = 1; i < upChart.data.datasets[0].backgroundColor.length; i++) {
                newBetArray.push(upChart.data.datasets[0].backgroundColor[i]);
            }
            upChart.data.datasets[0].backgroundColor = newColorsArray;
            upChart.update();
        } else {
            for (var i = 1; i < downChart.data.datasets[0].data.length; i++) {
                if (downChart.data.datasets[0].data[i] == userBet) {
                    if (downDupe) {
                        newBetArray.push(downChart.data.datasets[0].data[i]);
                    } else {
                        downDupe = true;
                    }
                }
                for (var i = 1; i < downChart.data.datasets[0].backgroundColor.length; i++) {
                    newBetArray.push(downChart.data.datasets[0].backgroundColor[i]);
                }
                downChart.data.datasets[0].backgroundColor = newColorsArray;
                downChart.data.datasets[0].data = newBetArray;
                downChart.update();
            }
        }
    }
}
// gets an array of all bets in the down pool. first number in the array (index 0) is the bet of the user watching this chart. 
// in case the pool doesnt have a bet of this specific user, make sure the array's first number is 0.
// also shows the pool amount, and the part the user has out of it
function updateDownPoolChart(betsArray) {
    if (!betsArray || secondsLeft == 1800) {
        return;
    }
    if (betsArray.length > 0) {
        colors = [];
        for (var i = 0; i < betsArray.length; i++) {
            colors[i] = "#FF8795";
        }
        downChart.data.datasets[0].data = betsArray;
        downChart.data.datasets[0].backgroundColor = colors;
        downChart.options.tooltips.enabled = true;
        downChart.update();
        var total = 0;
        for (var i = 0; i < betsArray.length; i++) {
            total += betsArray[i];
        }
        $("#downPoolAmount").text(total / 1e18 + " ETH");
        var percentage = (betsArray[0] / total) * 100;
        percentage = percentage.toFixed(3);
        $("#downBetShare").text(percentage + "%");
    }

}
// gets an array of all bets in the up pool. first number in the array (index 0) is the bet of the user watching this chart. 
// in case the pool doesnt have a bet of this specific user, make sure the array's first number is 0.
//also shows the pool amount, and the part the user has out of it
function updateUpPoolChart(betsArray) {
    if (!betsArray || secondsLeft == 1800) {
        return;
    }
    if (betsArray.length > 0) {
        colors = [];
        for (var i = 0; i < betsArray.length; i++) {
            colors[i] = "#78D66D";
        }
        upChart.data.datasets[0].data = betsArray;
        upChart.data.datasets[0].backgroundColor = colors;
        upChart.options.tooltips.enabled = true;
        upChart.update();
        var total = 0;
        for (var i = 0; i < betsArray.length; i++) {
            total += betsArray[i];
        }
        $("#upPoolAmount").text(total / 1e18 + " ETH");
        var percentage = (betsArray[0] / total) * 100;
        percentage = percentage.toFixed(3);
        $("#upBetShare").text(percentage + "%");
    }

}

//sync the timer with the game time stored on the blockchain. called only when the page is loaded.
function syncTimer(secondsLeftInGame) {

    secondsLeft = secondsLeftInGame;

    if (secondsLeftInGame > 900) {
        placingTIme = true;
        $("#title").text("Place your bets now!");
        $("#prog").css("width", ((secondsLeftInGame - 900) / 900) * 100 + "%");
        $("#claimButton").css("display", "none");
        $("#betDown").css("display", "inline-block");
        $("#betUp").css("display", "inline-block");
    } else {
        placingTime = false;
        $("#title").text("Claim your bets now!");
        $("#claimButton").css("display", "inline-block");
        $("#betDown").css("display", "none");
        $("#betUp").css("display", "none");
        $("#prog").css("width", ((secondsLeftInGame) / 900) * 100 + "%");

    }
    if (placingTime) {
        if (secondsLeftInGame < 1500 && secondsLeftInGame % 60 < 10) {
            $("#prog").text("0" + Math.floor((secondsLeftInGame - 900) / 60) + ":0" + parseInt(secondsLeftInGame % 60));
        } else if (secondsLeftInGame < 1500 && secondsLeftInGame % 60 >= 10) {
            $("#prog").text("0" + Math.floor((secondsLeftInGame - 900) / 60) + ":" + parseInt(secondsLeftInGame % 60));
        } else if (secondsLeftInGame >= 1500 && secondsLeftInGame % 60 < 10) {
            $("#prog").text(Math.floor((secondsLeftInGame - 900) / 60) + ":0" + parseInt(secondsLeftInGame % 60));
        } else if (secondsLeftInGame >= 1500 && secondsLeftInGame % 60 >= 10) {
            $("#prog").text(Math.floor((secondsLeftInGame - 900) / 60) + ":" + parseInt(secondsLeftInGame % 60));
        }
    } else {
        if (secondsLeftInGame < 600 && secondsLeftInGame % 60 < 10) {
            $("#prog").text("0" + Math.floor(secondsLeftInGame / 60) + ":0" + parseInt(secondsLeftInGame % 60));
        } else if (secondsLeftInGame < 600 && secondsLeftInGame % 60 >= 10) {
            $("#prog").text("0" + Math.floor(secondsLeftInGame / 60) + ":" + parseInt(secondsLeftInGame % 60));
        } else if (secondsLeftInGame >= 600 && secondsLeftInGame % 60 < 10) {
            $("#prog").text(Math.floor(secondsLeftInGame / 60) + ":0" + parseInt(secondsLeftInGame % 60));
        } else if (secondsLeftInGame >= 600 && secondsLeftInGame % 60 >= 10) {
            $("#prog").text(Math.floor(secondsLeftInGame / 60) + ":" + parseInt(secondsLeftInGame % 60));
        }
    }
    if (!startedInterval) {
        setInterval(moveTimer, 1000)
        startedInterval = true;
    }




}

// draws pool charts as empty, and sets each pool balance text to 0 ETH and shows the bet buttons. also resets the progress bar. used on page load and when a new game starts.
function drawEmptyCharts() {
    var ctxDown = $("#downPool")[0].getContext("2d");
    var ctxUp = $("#upPool")[0].getContext("2d");
    downChart = new Chart(ctxDown, {
        type: 'pie',
        data: {
            labels: [""],
            datasets: [{

                data: [1],
                backgroundColor: [
                    "#A8A8A8",

                ]
            }]
        },
        options: {
            legend: {
                display: false
            },
            tooltips: {
                displayColors: false,
                bodyFontSize: 20,
                enabled: false,
                callbacks: {
                    label: function(tooltipItem, data) {
                        var allData = data.datasets[tooltipItem.datasetIndex].data;
                        var tooltipLabel = data.labels[tooltipItem.index];
                        var tooltipData = allData[tooltipItem.index];
                        var total = 0;
                        for (var i in allData) {
                            total += allData[i];
                        }
                        var tooltipPercentage = (tooltipData / total) * 100;
                        tooltipPercentage = tooltipPercentage.toFixed(3);
                        return (tooltipData / 1e18) + ' ETH (' + tooltipPercentage + '%)';

                    }
                }
            }

        }

    });
    upChart = new Chart(ctxUp, {
        type: 'pie',
        data: {
            labels: [""],
            datasets: [{

                data: [1],
                backgroundColor: [
                    "#A8A8A8",

                ]
            }]
        },
        options: {
            legend: {
                display: false

            },
            tooltips: {
                displayColors: false,
                bodyFontSize: 20,
                enabled: false,
                callbacks: {
                    label: function(tooltipItem, data) {
                        var allData = data.datasets[tooltipItem.datasetIndex].data;
                        var tooltipLabel = data.labels[tooltipItem.index];
                        var tooltipData = allData[tooltipItem.index];
                        var total = 0;
                        for (var i in allData) {
                            total += allData[i];
                        }
                        var tooltipPercentage = (tooltipData / total) * 100;
                        tooltipPercentage = tooltipPercentage.toFixed(3);
                        return (tooltipData / 1e18) + ' ETH (' + tooltipPercentage + '%)';
                    }
                }
            }


        }

    });

    $("#upPoolAmount").text("0 ETH");
    $("#downPoolAmount").text("0 ETH");
    $("#upBetShare").text("0%");
    $("#downBetShare").text("0%");
    $("#betDown").css("display", "inline-block");
    $("#betUp").css("display", "inline-block");
    $("#prog").css("width", "100%");


}

function showGameNumber(gameNumber) {
    $("#gameNumber").text("Game #" + gameNumber);
}
//Shows an alert saying you need to install/unlock metamask. call this function if the user doesnt have an unlocked metamask wallet installed.
function alert() {
    $("#metaMaskAlert").css("display", "block");
}
