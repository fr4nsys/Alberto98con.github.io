const nav = document.querySelector('.nav');  
const menu_btn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

    window.addEventListener('scroll', function(){
        nav.classList.toggle('active', window.scrollY >0)
    })

    menu_btn.addEventListener('click', () => {
        menu.classList.toggle('active')
    })
document.addEventListener('click', function(event) {
    if (!menu.contains(event.target) && !menu_btn.contains(event.target)) {
        menu.classList.remove('active'); 
    }
});
