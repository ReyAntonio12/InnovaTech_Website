    /*AMVURGUESA DE NAV BAR  */

const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function (params) {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains ('open')

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
    }

    /* SERVICIOS TARJETAS DESPLEGABLES */
const tira = document.querySelectorAll('.tira');

tira.forEach(tira => {
    tira.addEventListener('click', () => {
        removeActiveClass();
        tira.classList.add('active');
    });
});

function removeActiveClass() {
    tira.forEach(tira => tira.classList.remove('active'));
}
