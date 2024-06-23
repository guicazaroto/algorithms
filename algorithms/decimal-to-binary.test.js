const decimalToBinary = require("./decimal-to-binary")

describe('decimal to binary', () => {

  it('should return the right binary value', () => {
    const result = decimalToBinary(10)

    expect(result).toBe('1010')
  })
})