// step-1
document.getElementById('add-money-btn')
    .addEventListener('click', function(event){
        event.preventDefault();
        // step-2 = get money added
        const addMoneyInput = document.getElementById('add-money-input').value;
        // step-3 = find the pin is right
        const inputPinNumber = document.getElementById('input-pin-number').value;
        console.log(addMoneyInput, inputPinNumber);
    })