loadOrder()

function loadOrder(){
    var chosen = JSON.parse(localStorage.getItem('menuChosen') || "[]")
    var menu = JSON.parse(localStorage.getItem('menu') || "[]")
    document.getElementById('total-detail').innerText = menu[chosen[0].menu].name + '\n' + 'IDR ' + menu[chosen[0].menu].price + ' x ' + chosen[0].qty
    document.getElementById('total-price').innerText = 'TOTAL : IDR ' + (chosen[0].qty*menu[chosen[0].menu].price)
}

document.getElementById('btn-order-food').addEventListener('click', () => order())

function order(){
    var orders = JSON.parse(localStorage.getItem('order') || "[]")
    var chosen = JSON.parse(localStorage.getItem('menuChosen') || "[]")
    var name = document.getElementById('user_name').value
    var email = document.getElementById('user_email').value
    var phone = document.getElementById('user_phone_number').value
    var address = document.getElementById('user_address').value
    var error = document.getElementById("err-order-food")
    var msg = document.getElementById("err-msg-order-food")

    if(!name || !email || !phone || !address){
        msg.innerText = 'All field must be filled!'
        error.setAttribute('style', 'visibility: visible')
    }else if(name.length < 5){
        msg.innerText = 'Name must more than 5 characters!'
        error.setAttribute('style', 'visibility: visible')
    }else if(!email.endsWith('@mail.com')){
        msg.innerText = 'Email must ends with "@mail.com"!'
        error.setAttribute('style', 'visibility: visible')
    }else if(isNaN(phone)){
        msg.innerText = 'Phone Number must be numeric!'
        error.setAttribute('style', 'visibility: visible')
    }else if(!address.endsWith(' Street')){
        msg.innerText = 'Address must ends with " Street"!'
        error.setAttribute('style', 'visibility: visible')
    }else{
        error.setAttribute('style', 'visibility: hidden')
        console.log(orders)
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = dd + '/' + mm + '/' + yyyy;
        orders.push({
            name: name,
            email: email,
            phoneNumber: phone,
            address: address,
            food: chosen[0].menu,
            qty: chosen[0].qty,
            date: today
        })
        localStorage.setItem('order', JSON.stringify(orders))
        location.href = '/history-food.html';
    }
}