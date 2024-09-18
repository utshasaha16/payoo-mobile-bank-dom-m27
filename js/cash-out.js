// cash-out-form start
document.getElementById('cash-out-btn')
    .addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = document.getElementById('cash-out-input').value;
    const cashOutNumber = parseFloat(cashOut);
    const pinNumber = document.getElementById('cash-out-pin-number').value;
    
    if(pinNumber === '1234'){
        const balance = document.getElementById('account-balance')
        .innerText;
        const accountBalance = parseFloat(balance);
        const newBalance = accountBalance - cashOutNumber;
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('failed to cash out! please try again');
    }
});