loadOrderHistory()
  var orders = []
  function loadOrderHistory(){
    orders = JSON.parse(localStorage.getItem('order'))
    console.log(orders)
    const container = document.getElementById('container-order-history')
    const template = document.getElementById('row-order-history')
    var menu = JSON.parse(localStorage.getItem('menu') || "[]")
  

    for (let index in orders) {
        const card = template.content.cloneNode(true)
        card.getElementById('row-date').innerText = orders[index].date
        card.getElementById('row-name').innerText = orders[index].name
        card.getElementById('row-email').innerText = orders[index].email
        card.getElementById('row-phone-number').innerText = orders[index].phoneNumber
        card.getElementById('row-address').innerText = orders[index].address
        card.getElementById('row-menu-name').innerText = menu[orders[index].food].name
        card.getElementById('row-price').innerText = menu[orders[index].food].price
        card.getElementById('row-qty').innerText = orders[index].qty
        card.getElementById('row-total-price').innerText = orders[index].qty*menu[orders[index].food].price
        container.appendChild(card)
    }
  
  }