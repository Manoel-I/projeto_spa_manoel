var flkty = new Flickity( '.main-gallery', {
    // options
    cellAlign: 'left',
    contain: true,
    "wrapAround": true, 
});
var flkty_2 = new Flickity( '.main-gallery_2', {
    // options
    cellAlign: 'left',
    contain: true,
    "wrapAround": true, 
});


const cardModel = document.createElement('div');
cardModel.classList.add('card');
cardModel.id = 'first_card';

const imgCard = document.createElement('img');
imgCard.src = './public/img/89354.png';
cardModel.appendChild(imgCard);

const divProductNameText = document.createElement('div');
divProductNameText.classList.add('product_name');
cardModel.appendChild(divProductNameText);

const divPriceText = document.createElement('div');
divPriceText.classList.add('price');
cardModel.appendChild(divPriceText);

const divInstallmentsText = document.createElement('div');
divInstallmentsText.classList.add('installments');
cardModel.appendChild(divInstallmentsText);

const divCarousel = document.getElementById('carousel_cards');
const divFirstCell_1 = document.getElementById('first_cell_1');
const divSecondCell_1 = document.getElementById('second_cell_1');
const divThirdCell_1 = document.getElementById('third_cell_1');
const divFirstCell_2 = document.getElementById('first_cell_2');
const divSecondCell_2 = document.getElementById('second_cell_2');
const divThirdCell_2 = document.getElementById('third_cell_2');



let price = 79.99;

const createCardClone = (index, parentDiv) => {
    const installments = Math.ceil(price / 5);
    const divClone = cardModel.cloneNode(true);

    divClone.childNodes[1].innerText = `Produto Exemplo ${index}`;
    divClone.childNodes[2].innerText = `R$ ${price.toFixed(2)}`;
    divClone.childNodes[3].innerText = `5x de R$ ${installments.toFixed(2)}`;
    parentDiv.appendChild(divClone);  
};

// Preenchimento do primeiro carousel
for (let i = 0; i <= 3; i++) {
    createCardClone(i+ 1, divFirstCell_1);
    createCardClone(i+ 1, divFirstCell_2);
    price += 20;
}

// Preenchimento do segundo carousel
for (let i = 0; i <= 3; i++) {
    price += 20;
    createCardClone(i + 5, divSecondCell_1);
    createCardClone(i + 5, divSecondCell_2);
}

// Preenchimento do terceiro carousel
for (let i = 0; i <= 3; i++) {
    price += 20;
    createCardClone(i + 9, divThirdCell_1);
    createCardClone(i + 9, divThirdCell_2);
}


