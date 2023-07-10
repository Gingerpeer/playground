// import express, { Request, Response } from 'express';
// import bodyParser from 'body-parser';

// const app = express();
// const port = 3000;


// app.use(bodyParser.json()); 

// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello, World!');
// });
// app.get('/createPhoneNumber', (req: Request, res: Response)=> {
//   // if(typeof req === 'object'){
//   //   res.send("This request is a type object")
//   // }
//   res.send("It works");
// });
// app.post('/createPhoneNumber', async(req: Request, res: Response)=> {
  
//   if(typeof req.body === 'object'){
//     console.log("This request is a type object")
//     try {
//       const inputArr: number[] = req.body
//       let newArr: string[] = [];
//       for (let index = 0; index < inputArr.length; index++) {
//         const element = inputArr[index];
//         if(index === 0){ 
//           newArr.push("(")
//           newArr.push(element.toString())
//         }else if(index === 2){
//           newArr.push(element.toString())
//           newArr.push(") ")
//         }else if(index === 5){
//           newArr.push(element.toString())
//           newArr.push("-")
//         }else{
//           newArr.push(element.toString())
//         }
        
//       }
//       res.send(newArr.join(""))
//     } catch (error) {
//       res.send("The request is not an Array")
//     }
//   }
//   // const request = req.body[0]
//   // 
//   // res.send(string)
// });

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });
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
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); 