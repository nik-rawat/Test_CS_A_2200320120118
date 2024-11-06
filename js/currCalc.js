var url = "https://api.exchangerate-api.com/v4/latest/";
var from = document.getElementById("from").value;
var to = document.getElementById("to").value;
var amount = document.getElementById("amount").value;

const convert = fetch(url + from)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        document.getElementById("result").innerHTML = data.rates[to] * amount;
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });