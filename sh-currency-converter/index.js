import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_Y4KKpX9K34cYMYxovuDRrWptPaOS0bgvEmnKN5Tf');

convertCurrency("USD","INR",13);

export async function convertCurrency(fromCurrency, toCurrency,units){

const res = await freecurrencyapi.latest({
    base_currency: fromCurrency,
    currencies: toCurrency
});
const multiplier = res.data[toCurrency];
return multiplier*units;
}