let count = document.querySelector('.js-input-count');
let rate = document.querySelector('.js-input-rate');
let formElement = document.querySelector('.js-form');
let resultElement = document.querySelector('.js-result');


// Form 1
formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    let countElement = count.value;
    let rateElement = rate.value;

    let score = countElement * rateElement;
    resultElement.innerText = `${score.toFixed(3)} PLN`;
});

formElement.addEventListener('reset', () => {
    resultElement.innerText = ``;
});

// Form 2

let formElement2 = document.querySelector('.js-form2');
let resultElement2 = document.querySelector('.js-result2');
let currency = document.querySelector('.js-form__currency1')
let count2 = document.querySelector('.js-form__currency2')
// let formElementCurrency = document.querySelector('.js-form__currency')
let eurochange = document.querySelector('.js-form-value__eur')
let eurovalue = document.querySelector('.js-value__eur')
let usdchange = document.querySelector('.js-form-value__usd')
let usdvalue = document.querySelector('.js-value__usd')
let gbpchange = document.querySelector('.js-form-value__gbp')
let gbpvalue = document.querySelector('.js-value__gbp')
let chfchange = document.querySelector('.js-form-value__chf')
let chfvalue = document.querySelector('.js-value__chf')


formElement2.addEventListener('submit', (event) => {
    event.preventDefault();
    eurovar = eurochange.value;
    eurovalue.value = eurovar;

    usdvar = usdchange.value;
    usdvalue.value = usdvar;

    gbpvar = gbpchange.value;
    gbpvalue.value = gbpvar;

    chfvar = chfchange.value;
    chfvalue.value = chfvar;

    let countElement = count2.value;
    let rateElement = currency.value;

    let score = countElement * rateElement;
    console.log(score)
    resultElement2.innerText = `${score.toFixed(3)} PLN`;
});

formElement.addEventListener('reset', () => {
    resultElement.innerText = ``;
});

