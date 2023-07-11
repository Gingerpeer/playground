export function createPhoneNumber(numbers: number[]): string{
  try {
    const inputArr: number[] = numbers
    let newArr: string[] = [];
    for (let index = 0; index < inputArr.length; index++) {
      const element = inputArr[index];
      if(index === 0){ 
        newArr.push("(")
        newArr.push(element.toString())
      }else if(index === 2){
        newArr.push(element.toString())
        newArr.push(") ")
      }else if(index === 5){
        newArr.push(element.toString())
        newArr.push("-")
      }else{
        newArr.push(element.toString())
      }
      
    }
    return newArr.join("")
} catch (error) {
  return "The input is not an Array"
}
}