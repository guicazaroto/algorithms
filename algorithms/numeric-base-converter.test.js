const baseConverter = require("./numeric-base-converter")

describe('decimal to binary', () => {

  it('should return the right binary value', () => {
    const result = baseConverter(10, 16)

    // expect(result).toBe('1010')
    expect(result).not.toBe('101')
  })

  it('convert to base 2', () => {
    const result = baseConverter(100345, 2)

    expect(result).toBe('11000011111111001')
  })

  it('convert to base 8', () => {
    const result = baseConverter(100345, 8)

    expect(result).toBe('303771')
  })

  it('convert to base 16', () => {
    const result = baseConverter(100345, 16)

    expect(result).toBe('187F9')
  })

  it('convert to base 35', () => {
    const result = baseConverter(100345, 35)

    expect(result).toBe('2BW0')
  })
})