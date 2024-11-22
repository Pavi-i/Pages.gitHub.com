function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    const menuIcon = document.getElementById('menu-icon');
    const body = document.body;  
    navMenu.classList.toggle('active');
    if (menuIcon.classList.contains('fa-bars')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
        body.style.overflow = 'hidden';
    } else {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
        body.style.overflow = 'auto';
    }
}

