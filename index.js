// var a=10;
// var b=20;
// var c=30;
// var ans=a+b+c;
// console.warn(ans);
// var x='20';
// for(i=0;i<10;i++)
// {
//     console.log(i)
// }
// if(20==x) console.log(x);
// else{
    // console.log("No");
// }
// const app=require("./app")
// console.log(app.y)
// const arr=[10,2,12,6,8,5,9]
// // console.log(arr)
// const res=arr.filter((element)=>{
//     return element<10;
//     // console.log(element)
// })
// console.warn(res)
//const fs= require('fs');
// fs.writeFileSync("hello.txt","Hello Everyone");
// console.log(__dirname,__filename)
//fs.writeFileSync("code.txt","Hello brother")


// const http= require('http')
// http.createServer((req,res)=>{
//     res.write("<h1>Hello Bhai</h1>");
//     res.end();
// }).listen(4000);
// console.log("Hello")
// const colors=require('colors')
// console.log("hi")
const http=require('http')
const data=require('./data')
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application\json'})
    res.write(JSON.stringify(data));
    res.end();
}).listen(5000)