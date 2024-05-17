test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expected(total).toBe(23);
});

    // Use the function like its supposed to be used
    const dollar = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expected(fromEuroToDollar(3.5)).toBe(3.745);
     // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
  }
  
  // We include fromEuroToDollar here as well because it needs to be exported

  module.exports = { sum, fromEuroToDollar } 
  
