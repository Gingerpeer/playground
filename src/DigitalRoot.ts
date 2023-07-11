export const digitalRoot = (n:number):number => {
  // your code here
  const recursiveFunc = (n:number)=>{
    let num:number = 0;
    const numberArr = Array.from(String(n), Number);
    for (let index = 0; index < numberArr.length; index++) {
      num = num + numberArr[index];
    }
    return num;
  }
  let answer = recursiveFunc(n)
  while(String(answer).length > 1){
    answer = recursiveFunc(answer)
  }
  return answer;
};
