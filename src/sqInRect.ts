export const sqInRect=(l:number, w:number): null|number[] =>{
  // Your code here...
  // if the length and width are equal, it's a square and we return null
  if (l === w) return null;

  // ensure length is always the longest side
  if (l < w) [l, w] = [w, l];

  const squares: number[] = [];

  while (l > 0 && w > 0) {
    squares.push(w); 
    [l, w] = [w, l - w];
    if (l < w) [l, w] = [w, l]; 
  }

  return squares;
}