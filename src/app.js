import React, { useEffect } from "react";

const API_KEY = `e8d68d9e02-25bde64120-raqsey`;

function CurrencyConv() {
	useEffect(() => {
		fetch(`https://api.currencylayer.com/live?access_key=${API_KEY}`, {
			method: "GET",
		})
			.then((res) => res.json())
			.then((res) => {
				console.log({ res });
			});
	}, []);

	return <div>Currency Converter</div>;
}

export default CurrencyConv;
