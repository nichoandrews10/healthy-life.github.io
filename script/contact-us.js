document.getElementById('btn-newsletter').addEventListener('click', ()=> newsletter())

function newsletter(){
  var email = document.getElementById('email').value 
  var error =  document.getElementById('err-newsletter')
  var msg = document.getElementById('err-msg-newsletter')

  if(!email){
    msg.innerText = 'Email cannot be empty!'
    error.setAttribute('style', 'visibility: visible')
  }else if(!email.endsWith('@mail.com')){
    msg.innerText = 'Email must ends with "@mail.com"!'
    error.setAttribute('style', 'visibility: visible')
  }else{
    error.setAttribute('style', 'visibility: hidden')
  }
}