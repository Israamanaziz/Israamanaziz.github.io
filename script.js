function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => link.classList.remove('active'));
    
    document.getElementById(pageId).classList.add('active');
    event.target.classList.add('active');
    
    window.scrollTo(0, 0);
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('nav a').classList.add('active');
});
