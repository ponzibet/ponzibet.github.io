var contractABI = JSON.parse('[{"constant":true,"inputs":[],"name":"totalBalanceDown","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"downBetRecords","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pyramid","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_bet","type":"bool"}],"name":"enterRound","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"totalBalanceUp","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getUserBet","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_contract","type":"address"}],"name":"changeContractAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"minBet","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"upBetRecords","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"endPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getUserBalances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getUserBalancesLastBet","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_minBet","type":"uint256"}],"name":"changeMinBet","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdrawFromFeeBalance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"roundTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"startPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"contractAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"placeBet","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]');
var ponziContract;

$(document).ready(function () {
  web3.eth.getAccounts(function(err,val) {
    console.log(val);
    if(val.length === 0) {
      alert();    
    }
    else {
      ponziContract = web3.eth.contract(contractABI).at('0x485b224c97ad56dc5b145eafdee71a7b5163f735');
      if(ponziContract) {  
       
      }   
    }    
  });
});

function changeContractAddress(a) {
  let address = a;
  let Tx = {
    from: web3.eth.accounts[0],
    to: ponziContract.address,
    data: ponziContract.changeContractAddress.getData(address),
    gasPrice: 5000000000
  };  
  web3.eth.sendTransaction(Tx, function(err, transactionHash) {
    if(!err) {
      alert("Transaction Hash: ",transactionHash); 
    }    
  });    
}

function withdrawFromFeeBalance() {
  let Tx = {
    from: web3.eth.accounts[0],
    to: ponziContract.address,
    data: ponziContract.withdrawFromFeeBalance.getData(),
    gasPrice: 5000000000
  };  
  web3.eth.sendTransaction(Tx, function(err, transactionHash) {
    if(!err) {
      alert("Transaction Hash: ",transactionHash); 
    }    
  });   
}
   
$(document).ready(function(){
  $("#changeAddressButton").click(function(){
    changeContractAddress($("#addressText").val());
  });
  $("#withdrawFees").click(function(){
    withdrawFromFeeBalance();
  });  
});
