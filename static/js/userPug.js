let idUser = window.location.pathname.split('/')[3]

let btn_save = document.querySelector('#btn-save')

let formulario = document.querySelector('#formulario')

btn_save.addEventListener('click', () => {
    formulario.action = '/update/'+idUser
})