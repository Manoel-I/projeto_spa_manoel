
// form-validation.js

function isBetween(value, min, max) {
    return value >= min && value <= max;
}

function validateForm(event) {
    event.preventDefault();

    var cardholder = document.getElementById('cardholders_name');
    var cardNumber = document.getElementById('card_number');
    var month = document.getElementById('card_val_month');
    var year = document.getElementById('card_val_year');
    var cvv = document.getElementById('card_cvv');

    const text = /^[a-zA-Zà-úÀ-Ú ]+$/;
    const number = /^\d*$/;

    if (cardholder.value.length > 0) {
        if (!text.test(cardholder.value)) {
            cardholder.classList.add('inputError');
            document.getElementById('cardholders_name_error').innerHTML = "Formato incorreto, apenas letras";
        } else {
            cardholder.classList.remove('inputError');
            document.getElementById('cardholders_name_error').innerHTML = "";
        }
    } else {
        document.getElementById('cardholders_name_error').innerHTML = "Não pode ficar em branco";
        cardholder.classList.add('inputError');
    }

    if (cardNumber.value.length > 0) {
        if (!number.test(cardNumber.value)) {
            cardNumber.classList.add('inputError');
            document.getElementById('card_number_error').innerHTML = "Formato incorreto, apenas números";
        } else {
            if (cardNumber.value.length == 16) {
                cardNumber.classList.remove('inputError');
                document.getElementById('card_number_error').innerHTML = "";
            } else {
                document.getElementById('card_number_error').innerHTML = "Formato incorreto, insira os 16 digitos do cartão";
                cardNumber.classList.add('inputError');
            }
        }
    } else {
        document.getElementById('card_number_error').innerHTML = "Não pode ficar em branco";
        cardNumber.classList.add('inputError');
    }

    if (month.value.length > 0) {
        if (!number.test(month.value)) {
            document.getElementById('card_val_error').innerHTML = "Formato incorreto, apenas números";
            month.classList.add('inputError');
        } else {
            if (!isBetween(parseInt(month.value), 1, 12)) {
                month.classList.add('inputError');
                document.getElementById('card_val_error').innerHTML = "Formato incorreto, insira um mês valido";
            } else {
                month.classList.remove('inputError');
                document.getElementById('card_val_error').innerHTML = "";
            }
        }
    } else {
        document.getElementById('card_val_error').innerHTML = "Não pode ficar em branco";
        month.classList.add('inputError');
    }

    if (year.value.length > 0) {
        if (!number.test(year.value)) {
            document.getElementById('card_val_error').innerHTML = "Formato incorreto, apenas números";
            year.classList.add('inputError');
        } else {
            if (!isBetween(parseInt(year.value), 22, 99)) {
                year.classList.add('inputError');
                document.getElementById('card_val_error').innerHTML = "Formato incorreto, insira um ano valido";
            } else {
                year.classList.remove('inputError');
                document.getElementById('card_val_error').innerHTML = "";
            }
        }
    } else {
        document.getElementById('card_val_error').innerHTML = "Não pode ficar em branco";
        year.classList.add('inputError');
    }


    if (cvv.value.length > 0) {
        if (!number.test(cvv.value)) {
            cvv.classList.add('inputError');
            document.getElementById('card_cvv_error').innerHTML = "Formato incorreto, apenas números";
        } else {
            cvv.classList.remove('inputError');
            document.getElementById('card_cvv_error').innerHTML = "";
        }
    } else {
        cvv.classList.add('inputError');
        document.getElementById('card_cvv_error').innerHTML = "Não pode ficar em branco";
    }
}




function changeCardNumber() {
    var cardnumber = document.getElementById("card_number").value;
    if (cardnumber == "") {
        document.getElementById("cardc-number").innerText = "0000 0000 0000 0000"
    } else {
        document.getElementById("cardc-number").innerText = cardnumber;
    }

}

function changeNameCard() {
    var cardname = document.getElementById("cardholders_name").value;
    if (cardname == "") {
        document.getElementById("cardc-name").innerText = "Nome do Cartão"
    } else {
        document.getElementById("cardc-name").innerText = cardname;
    }
}

function changeMonth() {
    var cardmonth = document.getElementById("card_val_month").value;
    if (cardmonth == "") {
        document.getElementById("cardc-datem").innerText = "MM";
    } else {
        document.getElementById("cardc-datem").innerText = cardmonth;
    }
}
function changeYear() {
    var cardyear = document.getElementById("card_val_year").value;
    if (cardyear == "") {
        document.getElementById("cardc-datey").innerText = "YY";
    } else {
        document.getElementById("cardc-datey").innerText = cardyear;
    }
}
