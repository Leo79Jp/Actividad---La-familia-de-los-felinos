
let cambiarTema = document.querySelector('body')
let h1 =  document.querySelector('h1')
let item = document.querySelectorAll('.item')
let p =  document.querySelectorAll('p')
let h2 = document.querySelectorAll('h2')

let confirmar = confirm('Quiere cambiar el Tema a Oscuro?');
if (confirmar == true) {
    cambiarTema.classList.toggle('body_Oscuro')
    h1.classList.toggle('h1_oscuro')
    for (let i=0; i < item.length; i++){
        item[i].classList.toggle('item_oscuro')
        h2[i].classList.toggle('h2_oscuro')
        p[i].classList.toggle('p_oscuro')
    }
}
