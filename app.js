// One euro is:
const fromDollarToYen = (dollar) => {
  let euros = dollar / oneEuroIs["USD"]; 
  let yens = euros * oneEuroIs["JPY"];
  return yens;
}

const fromYenToPound = (yen) => {
  let euros = yen / oneEuroIs["JPY"]; 
  let pounds = euros * oneEuroIs["GBP"];
  return pounds;
}

// One euro is:
let oneEuroIs = {
  "JPY": 156.5, // japan yen
  "USD": 1.07, // us dollar
  "GBP": 0.87, // british pound
}


