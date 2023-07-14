export const encryptThis = (str: string): string => {
  const arr: string[] = str.split(" ")
  let newArr: string[] = []
  for (let i = 0; i < arr.length; i++) {
    const word = arr[i].split("");
    let newCharacters: string[] = []
    word.forEach((char,i) => {
      if(i === 0){
        newCharacters.push(char.charCodeAt(0).toString())
      } else {
        newCharacters.push(char)
      }
    });

    // handle the second and last letter swapping
    if(newCharacters.length > 2) {
      const temp = newCharacters[1]
      newCharacters[1] = newCharacters[newCharacters.length - 1]
      newCharacters[newCharacters.length - 1] = temp
    }

    let newWordString = newCharacters.join("")
    newArr.push(newWordString)
  }

  return newArr.join(" ")
}
