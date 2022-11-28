loadReservationHistory()

var reservations = []

function loadReservationHistory(){
  reservations = JSON.parse(localStorage.getItem('reservation'))
  const container = document.getElementById('container-reservation-history')
  const template = document.getElementById('row-reservation-history')
  var reservation = JSON.parse(localStorage.getItem('reservation') || "[]")

  for(let index in reservations){
    console.log(reservations[index].name)
    const card = template.content.cloneNode(true)
    card.getElementById('row-name').innerText = reservation[index].name
    card.getElementById('row-email').innerText = reservation[index].email
    card.getElementById('row-phone-number').innerText = reservation[index].phone
    card.getElementById('row-guest').innerText = reservation[index].guest
    card.getElementById('row-date').innerText = reservation[index].date
    container.appendChild(card)
  }
}