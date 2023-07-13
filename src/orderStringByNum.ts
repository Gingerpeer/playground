export function orderStringByNum(words:string):string{
  const arrayOfWords = words.split(" ")
  
  arrayOfWords.sort((a, b) => {
    let numA: number = Number(a.match(/\d+/)?.[0] ?? Infinity);
    let numB: number = Number(b.match(/\d+/)?.[0] ?? Infinity);
    return numA - numB;
  });
  
  let sortedStr: string = arrayOfWords.join(" ");
  return sortedStr
}