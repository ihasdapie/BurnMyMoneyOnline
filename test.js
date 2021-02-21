fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-charts?symbol=HYDR.ME&interval=5m&range=1d&region=US&comparisons=%5EGDAXI%2C%5EFCHI", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "6ea37a8c9amsh21145567185c7e6p1058c4jsn0e3ab2d18173",
		"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
