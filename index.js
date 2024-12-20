const currencyFirst = document.getElementById("currency-first");
const currencySecond = document.getElementById("currency-second");

const worthFirst = document.getElementById("worth-first");
const worthSecond = document.getElementById("worth-second");

const exchageRate = document.getElementById("exchange-rate");

updateRate();
function updateRate() {
  const url = `https://v6.exchangerate-api.com/v6/a6d1d8ff3be7becc65c229a8/latest/${currencyFirst.value}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const rate = data.conversion_rates[currencySecond.value];
      console.log(rate);
      exchageRate.innerHTML = `1 ${currencyFirst.value} = ${
        rate + " " + currencySecond.value
      }`;

      worthSecond.value = worthFirst.value * rate;
    });
}

currencyFirst.addEventListener("change", updateRate);
currencySecond.addEventListener("change", updateRate);
worthFirst.addEventListener("input", updateRate);
