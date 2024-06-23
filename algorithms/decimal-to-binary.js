const Stack = require("../data-structures/stack/with-array/stack");

function decimalToBinary (number) {
  const stack = new Stack()

  let initialNumber = number
  let binaryString = ''

  while(initialNumber > 0) {
    const mod  = initialNumber % 2
    stack.push(mod)
    
    initialNumber = Math.floor(initialNumber / 2)
  }

  while(!stack.isEmpty()) {
    binaryString += stack.pop().toString()
  }

  return binaryString
}

module.exports = decimalToBinary