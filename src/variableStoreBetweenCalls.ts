// A Chain adding function

export default function add(n: number): any {
  const f = function(x: number) {
      return add(n + x);
  };
  
  f.valueOf = function() {
      return n;
  };
  
  return f;
}




