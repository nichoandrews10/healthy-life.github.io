loadDetail()

function loadDetail(){
    const detail = JSON.parse(localStorage.getItem('menuDetail'))
    var menu = JSON.parse(localStorage.getItem('menu') || "[]")

    if(detail != null){
        document.getElementById('img-menu-detail').setAttribute('src', menu[detail].image)
        document.getElementById('menu-detail-name').innerText = menu[detail].name
        document.getElementById('menu-detail-price').innerText = "IDR " + menu[detail].price
        document.getElementById('menu-detail-desc').innerText = menu[detail].description
        document.getElementById('menu-detail-info').innerText = menu[detail].nuInfo + '\n Rating : ' + menu[detail].hRating
    }

}