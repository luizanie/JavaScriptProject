// pobranie ele
const btnItem = document.querySelectorAll('.btn-item');
const btnItemCon = document.querySelectorAll('.btn-project-item');

// wybor sekcji do wyswietlenia
function selectItem(e) {
    removeBorder();
    removeShow();
    this.classList.add('btn-border');
    const btnContent = document.querySelector(`#${this.id}-project`);
    btnContent.classList.add('show');
}

// odjecie border-bottom
function removeBorder() {
    btnItem.forEach(item => item.classList.remove('btn-border'));
}
// odjecie klasy show 
function removeShow() {
    btnItemCon.forEach(item => item.classList.remove('show'));
}

// dodanie funkcji na click do przyciskow
btnItem.forEach(item => item.addEventListener('click', selectItem))