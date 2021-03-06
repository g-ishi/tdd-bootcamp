// テスト用の関数定義
const stackFactory = () => {
  let count = 0;
  return {
    isEmpty: () => count === 0,
    size: () => count,
    push: () => {
      if (count === 2) throw new Error("capacity overflow error");
      count++;
    },
    pop: () => {
      if (count === 0) throw new Error("capacity underflow error");
      count--;
    } 
  };
};

let stack;

// テスト定義
describe('the stack canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe('a stack', () => {
  beforeEach(() => {
    stack = stackFactory();
  })
  it('starts empty', () => {
    expect(stack.isEmpty()).toBe(true);
  });
  it('starts with stack size of 0', () => {
    expect(stack.size()).toBe(0);
  });
  it('is not empty when pushed', () => {
    stack.push("item");
    expect(stack.isEmpty()).toBe(false);
  });
  it('stack size is 1 when pushed', () => {
    stack.push("item");
    expect(stack.size()).toBe(1);
  });
  it('stack is empty when pushed and popped', () => {
    stack.push("item");
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });
  it('stack size is 0 when pushed and popped', () => {
    stack.push("item");
    stack.pop();
    expect(stack.size()).toBe(0);
  });
  it('throws overflow error when pushing to a stack at full capacity', () => {
    stack.push("item");
    stack.push("item");
    expect(() => {
      stack.push("item");
    }).toThrowError("capacity overflow error");
  });
  it('throw underflow error when popping an empty stack', () => {
    expect(() => {
      stack.pop();
    }).toThrowError("capacity underflow error");
  });
  it.todo('pops the same one item when pushed');
  it.todo('pops two items with the most recent first');
  it.todo('accepts only a positive capacity');
});