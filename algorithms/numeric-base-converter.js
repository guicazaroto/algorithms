const Stack = require("../data-structures/stack/with-array/stack");

function decimalToBinary (number, base) {
  const stack = new Stack()
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let initialNumber = number
  let binaryString = ''

  while(initialNumber > 0) {
    const mod  = initialNumber % base
    stack.push(mod)
    
    initialNumber = Math.floor(initialNumber / base)
  }


  while(!stack.isEmpty()) {
    binaryString += digits[stack.pop().toString()]
  }

  return binaryString
}

module.exports = decimalToBinary