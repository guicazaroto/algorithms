class Stack {
  constructor() {
    this.items = {}
    this.count = 0
  }

  push (item) {
    this.items[this.count] = item
    this.count++ 
  }

  size () {
    return this.count
  }

  isEmpty() {
    return this.size() === 0
  }

  pop () {
    if(this.isEmpty()) {
      return "Underflow";
    }

    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]

    return result
  }

  peek () {
    if(this.isEmpty()) {
      return undefined
    }

    return this.items[this.count - 1]
  }

  clear() {
    while(!this.isEmpty()) {
      this.pop()
    }
  }

  toString() {
    if(this.isEmpty()) {
      return ''
    }

    let objString = `${this.items[0]}`

    for(let i = 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`
    }

    return objString
  }

}

module.exports = Stack;