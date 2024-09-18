// step-1
document.getElementById('add-money-btn')
    .addEventListener('click', function(event){
        event.preventDefault();
        // step-2 = get money added
        const addMoneyInput = document.getElementById('add-money-input').value;
        // step-3 = find the pin
        const inputPinNumber = document.getElementById('input-pin-number').value;
        // verify the pin
        if(inputPinNumber === '1234'){
            // step-4 = get the account balance
            const accountBalance = document.getElementById('account-balance')
            .innerText;
            const addMoney = parseFloat(addMoneyInput);
            const balance = parseFloat(accountBalance);
            const newBalance = addMoney + balance;
            console.log(newBalance);
            // step-5 = set new balance in DOM
            document.getElementById('account-balance').innerText = newBalance
            
        }
        else{
            alert('failed to add money! please try again')
        }
    })