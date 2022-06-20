function menuToggle () {
    let menuArea = document.getElementById('menu-mobile');

    if (menuArea.style.display == 'flex') {
        menuArea.style.display = 'none';
    } else {
        menuArea.style.display = 'flex';
    }

}