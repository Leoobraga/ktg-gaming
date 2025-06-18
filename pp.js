const hambu = document.getElementById('hambu');
const navList = document.getElementById('navList');

hambu.addEventListener('click', (e) => {
    e.stopPropagation();
    navList.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (navList.classList.contains('active') &&
!navList.classList.contains('e.target') &&
!hambu.contains(e.target)) {
    navList.classList.remove('active');
}
})