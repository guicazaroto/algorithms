const Stack = require('./stack');
test('Stack s`hould be initialized empty', () => {
  const stack = new Stack();
  expect(stack.isEmpty()).toBe(true);
});

test('Stack should push elements', () => {
  const stack = new Stack();
  stack.push(5);
  stack.push(3);
  expect(stack.size()).toBe(2);
  expect(stack.peek()).toBe(3);
});

test('Stack should pop elements', () => {
  const stack = new Stack();
  stack.push(5);
  stack.push(3);
  stack.pop();
  expect(stack.size()).toBe(1);
  expect(stack.peek()).toBe(5);
});

test('Stack should clear elements', () => {
  const stack = new Stack();
  stack.push(5);
  stack.push(3);
  stack.clear();
  expect(stack.isEmpty()).toBe(true);
});

test('Stack should return Underflow when popping an empty stack', () => {
  const stack = new Stack();
  expect(stack.pop()).toBe('Underflow');
});