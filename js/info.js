document.getElementById('login-btn')
    .addEventListener('click', function(event){
        event.preventDefault();

        const numberInput = document.getElementById('number-input').value ;
        console.log(numberInput);
    })