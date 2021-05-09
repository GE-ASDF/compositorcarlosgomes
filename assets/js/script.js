function abrirMenu(){
    let menuMobile = document.querySelector('.menuMobile');
    let nav = document.querySelector('nav ul');
    menuMobile.addEventListener('click', function(){
        nav.classList.toggle('isOpen');
    });
}
abrirMenu();

