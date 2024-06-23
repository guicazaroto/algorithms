const items = {
  0: 'a',
  1: 'b',
  2: 'c',
  3: 'd'
}

const count = 4

function test () {
  let objString = `${items[0]}`
  
  
  for(let i = 1; i < count; i++) {
    objString = `${objString}, ${items[i]}`
  }
  
  console.log(objString) // a, b, c
}

test()
