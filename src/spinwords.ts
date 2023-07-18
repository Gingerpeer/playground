export function spinWords(words: string): string {
  const arrWords = words.split(" ")
  let newArrWords: string[] = []
  arrWords.map((word, index)=>{
    if(word.length > 4){
      const reversedWord = word
        .split("")
        .reverse()
        .join("")
        newArrWords.push(reversedWord)
    }else{
      newArrWords.push(word)
    }
  })
  return newArrWords.join(" ")
}