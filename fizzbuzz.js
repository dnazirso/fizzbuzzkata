const defaultSymbols = {
  3: "fizz",
  5: "buzz",
};

function fizzbuzz(number, symbols = defaultSymbols) {
  const result = Object.entries(symbols).reduce(
    (acc, diviser) => (number % diviser[0] === 0 ? acc + diviser[1] : acc),
    ""
  );
  return result.length > 0 ? result : number.toString();
}

export default fizzbuzz;
