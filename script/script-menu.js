var menu = JSON.parse(localStorage.getItem('menu'))

loadMenu()
var chooseMenu = []
function loadMenu(){
    chooseMenu = JSON.parse(localStorage.getItem('menu'))
    const containerFood = document.getElementById('container-menu-food')
    const templateFood = document.getElementById('card-menu-food')
    const containerDrink = document.getElementById('container-menu-drink')
    const templateDrink = document.getElementById('card-menu-drink')
    const containerDessert = document.getElementById('container-menu-dessert')
    const templateDessert = document.getElementById('card-menu-dessert')

    for (let index in chooseMenu) {
        if(menu[index].kategori == 'Food'){
            const card = templateFood.content.cloneNode(true)
            card.getElementById('name-menu-food').innerText = menu[index].name
            card.getElementById('desc-menu-food').innerText = 'IDR ' + menu[index].price
            card.getElementById('img-menu-food').setAttribute('src', menu[index].image)
            card.getElementById('btn-menu-food').addEventListener('click', () => {
                console.log('clicked')
                localStorage.setItem('menuDetail', JSON.stringify(index))
                location.href = '/menu-detail.html';
            })
            containerFood.appendChild(card)
        }else if(menu[index].kategori == 'Drink'){
            const card = templateDrink.content.cloneNode(true)
            card.getElementById('name-menu-drink').innerText = menu[index].name
            card.getElementById('desc-menu-drink').innerText = 'IDR ' + menu[index].price
            card.getElementById('img-menu-drink').setAttribute('src', menu[index].image)
            card.getElementById('btn-menu-drink').addEventListener('click', () => {
                localStorage.setItem('menuDetail', JSON.stringify(index))
                location.href = '/menu-detail.html';
            })
            containerDrink.appendChild(card)
        }else if(menu[index].kategori == 'Dessert'){
            const card = templateDessert.content.cloneNode(true)
            card.getElementById('name-menu-dessert').innerText = menu[index].name
            card.getElementById('desc-menu-dessert').innerText = 'IDR ' + menu[index].price
            card.getElementById('img-menu-dessert').setAttribute('src', menu[index].image)
            card.getElementById('btn-menu-dessert').addEventListener('click', () => {
                localStorage.setItem('menuDetail', JSON.stringify(index))
                location.href = '/menu-detail.html';
            })
            containerDessert.appendChild(card)
        }
    }

}