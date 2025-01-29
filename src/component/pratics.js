import fs from 'fs';

setImmediate(()=>console.log("immdiate1"));
setTimeout(()=>console.log("timer01"));


fs.readFile('data.txt','utf-8',()=>{
    setTimeout(()=>console.log("timer02"));
})

setImmediate(()=>console.log('immdeiate2'))