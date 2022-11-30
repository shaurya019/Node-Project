const fs = require('fs'); 

// fs.readFile('file1.txt','utf8',(err,data)=>{
// console.log(err,data)
// })

const a = fs.readFileSync('file1.txt');
console.log(a.toString());

fs.writeFileSync('file2.txt',"this is the data", () =>{
    console.log("written");
})