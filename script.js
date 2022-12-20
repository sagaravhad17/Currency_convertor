var select = document.querySelectorAll('select');
input_currency = document.getElementById('input_currency');
output_currency = document.getElementById('output_currency');


const host = 'api.frankfurter.app';
fetch(`https://${host}/currencies`)
  .then(resp => resp.json())
  .then((data) => {
    const entries = Object.entries(data);
    for(i=0;i<entries.length;i++){
        select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`
        select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`
    }
    // alert(`10 GBP = ${data.rates.USD} USD`);
  });

function convertor(){
    var input_currency_val = input_currency.value;

    if(select[0].value != select[1].value){
        // alert("Wright")
        const host = 'api.frankfurter.app';
        fetch(`https://${host}/latest?amount=${input_currency_val}&from=${select[0].value}&to=${select[1].value}`)
          .then(resp => resp.json())
          .then((data) => {
            value = Object.values(data.rates)[0];
            output_currency.value = value.toFixed(2);
            // console.log(data);
            // alert(`10 GBP = ${data.rates.USD} USD`);
          });
    }else{
        alert("Choose Two different Currencies")
    }
}