// show the cash out form
document.getElementById('feature-cash-out-btn')
    .addEventListener('click', function(){
        // show cash out form
        document.getElementById('form-cash-out').classList.remove('hidden');
        // hidden add money form
        document.getElementById('form-add-money').classList.add('hidden');
    });

    // show add money form
    document.getElementById('feature-add-money-btn')
        .addEventListener('click', function(){
            document.getElementById('form-add-money')
            .classList.remove('hidden');

            document.getElementById('form-cash-out')
            .classList.add('hidden');
        });