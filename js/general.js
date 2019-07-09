const btnItem = document.querySelectorAll('.btn-item');
const btnItemCon = document.querySelectorAll('.btn-project-item');

function selectItem(e) {
    removeBorder();
    removeShow();
    this.classList.add('btn-border');
    const btnContent = document.querySelector(`#${this.id}-project`);
    btnContent.classList.add('show');
}

function removeBorder() {
    btnItem.forEach(item => item.classList.remove('btn-border'));
}

function removeShow() {
    btnItemCon.forEach(item => item.classList.remove('show'));
}

btnItem.forEach(item => item.addEventListener('click', selectItem))