var api = "https://api.exchangerate-api.com/v4/latest/USD"
var res = fetch(api)
.then(response => {
        return response.json();
    }
);
console.log(res);