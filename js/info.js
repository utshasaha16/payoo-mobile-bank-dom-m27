document.getElementById('login-btn')
    .addEventListener('click', function(event){
        event.preventDefault();

        const numberInput = document.getElementById('number-input').value;
        const pinNumber = document.getElementById('pin-number').value;
        // console.log(numberInput,pinNumber);

        if(numberInput === '5' && pinNumber === '1234'){
            console.log('You are logged in');
            window.location.href = '/home.html'
        }
        else{
            alert('wrong number and pin');
        }
    })