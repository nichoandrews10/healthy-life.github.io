document.getElementById('btn-reservation').addEventListener('click', () => reserve())

function reserve(){
  var reservations = JSON.parse(localStorage.getItem('reservation') || "[]")

  var name = document.getElementById('user_name').value;
  var email = document.getElementById('user_email').value;
  var phone = document.getElementById('user_phone_number').value;
  var guest = document.getElementById('guest_count').value;
  var date = document.getElementById('reservation_date').value;
  var error =  document.getElementById('err-reservation')
  var msg = document.getElementById('err-msg-reservation')

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  // console.log(date)
  var reserve_dd = date.substring(8,10);
  var reserve_mm = date.substring(5,7);
  var reserve_yyyy = date.substring(0,4);
  // console.log(reserve_dd, reserve_mm,reserve_yyyy)
  // console.log(dd, mm,yyyy)

  if(!name || !email || !phone || !guest || !date){
    msg.innerText = 'All field must be filled!'
    error.setAttribute('style', 'visibility: visible')
  }else if(name.length < 5){
    msg.innerText = 'Name must more than 5 characters!'
    error.setAttribute('style', 'visibility: visible')
  }else if(!email.endsWith('@mail.com')){
    msg.innerText = 'Email must ends with "@mail.com"!'
    error.setAttribute('style', 'visibility: visible')
  }else if(isNaN(phone)){
    msg.innerText = 'Phone number must be numeric!'
    error.setAttribute('style', 'visibility: visible')
  }else if(guest < 1){
    msg.innerText = 'Guest count must be more than 0!'
    error.setAttribute('style', 'visibility: visible')
  }else if(reserve_dd < dd || reserve_mm < mm || reserve_yyyy < yyyy){
    msg.innerText = 'Reservation date cannot be earlier than today!'
    error.setAttribute('style', 'visibility: visible')
  }else{
    error.setAttribute('style', 'visibility: hidden')

    reservations.push({
      name: name,
      email: email,
      phone: phone,
      guest: guest,
      date: date
    })
    localStorage.setItem('reservation', JSON.stringify(reservations))
    location.href = '/history-reservation.html'
  }
}
