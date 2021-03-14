module.exports = function check(str, bracketsConfig) {
      let result = true;
      let stack = new Stack();
  
      for (let i = 0; i < str.length; i++) {
          const c = str[i];
          let isStart = false;
          bracketsConfig.forEach(item => {
            if (c === item[0]) {
              isStart = true;
            }
          });
          if (isStart) {
            stack.push(c);
            continue;
          }

          if (stack.size() === 0) {
              return false;
          }
  
          const p = stack.pop();
          let isPair = false;
          bracketsConfig.forEach(item => {
            if (p === item[0] && c === item[1]) {
              isPair = true;
            }
          });
          if (isPair) {
            continue;
          } else {
            result = false;
            return result;
          }
      }
      if (stack.size() > 0) {
          return false;
      } 
      return result;
}


class Stack {  
  constructor() {  
    this.stack = [];    
  }
  
  push(item) {
    this.stack.push(item);
  }

  pop() {
    return this.stack.pop();
  }

  size() {
    return this.stack.length;
  }
}
