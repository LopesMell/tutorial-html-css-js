function openModal(idModal) {
    const modal = document.getElementById(idModal);
    //document é tipo a página inteira, getElementById é um método que pega o elemento pelo id, no caso o modal
    modal.style.display = "flex";
}

function closeModal(idModal) {
    const modal = document.getElementById(idModal);
    modal.style.display = "none";