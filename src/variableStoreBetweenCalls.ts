// A Chain adding function

export default function add(n: number): any {
  const func = function(x: number) {
    return add(n + x);
  }
  
  func.valueOf = func.toString = function() {
    return n;
  }

  return func;
}




