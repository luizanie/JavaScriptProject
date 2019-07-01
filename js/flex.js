// pobranie ele
const panels = document.querySelectorAll(".panel");

// funckja zmeniajace klase open
function toggleOpen() {
    this.classList.toggle('open')
}

// funkcja zmieiajace (dodanie/odjecie) klasy 'open-active' do ele ktory ma flex
function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active')
    }
}

// dodanie funcji na click/transitioned na kazdy panel
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));