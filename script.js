let open = document.getElementById('open-menu')
let close = document.getElementById('close-menu')
let navLinks = document.getElementById('nav-links')

open.addEventListener('click', handleOpen);
close.addEventListener('click', handleClose);

function handleOpen(e){
    navLinks.style.left= "0"
    console.log('opened')
}

function handleClose(e){
    navLinks.style.left = "-99999999px"
    console.log('closed')
}