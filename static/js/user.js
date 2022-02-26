let idUser = window.location.pathname.split('/')[2]

let btn_delete = document.querySelector('#btn-delete')

btn_delete.addEventListener('click', () => {
    fetch('/delete/'+idUser,{
        method: 'DELETE'
    })
    .then((res) => {
        location.href = '/'
    })
})