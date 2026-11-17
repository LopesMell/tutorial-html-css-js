function openModal(idModal) {
    const modal = document.getElementById(idModal);
    //document é tipo a página inteira, getElementById é um método que pega o elemento pelo id, no caso o modal
    modal.style.display = "flex";
}

function closeModal(idModal) {
    const modal = document.getElementById(idModal);
    modal.style.display = "none";
}

function addstock(event) {
    event.preventDefault();
    const form = event.target
    const stock = {
        ticket: form.stockTicket.value,
        name: form.stockName.value,
        price: form.stockPrice.value,
        quantity: form.stockQuantity.value
        
    }
    console.log(stock)

    const stocklist = document.getElementById("stockList")
    stocklist.innerHTML = `<h1> troquei o conteudo da stocklist </h1>`
}