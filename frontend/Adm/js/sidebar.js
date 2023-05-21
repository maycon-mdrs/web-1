const sideBar = document.querySelector('.side-bar');
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click', () => {
    sideBar.classList.add('active'); 
    //menuBtn.style.visibility = "hidden";
})

closeBtn.addEventListener('click', () => {
    sideBar.classList.remove('active'); 
    //menuBtn.style.visibility = "visible";
})