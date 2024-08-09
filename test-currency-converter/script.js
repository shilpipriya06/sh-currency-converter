import {convertCurrency}  from "sh-currency-converter";

convertCurrency("USD","INR",5).then(res=>console.log(res));