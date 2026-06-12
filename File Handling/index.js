const { error, log } = require("console");
const fs = require("fs")

// Write The File 

// synchronous
// fs.writeFileSync("./test.txt", "Hello world! ")

// Async
// fs.writeFile("./demo.txt", "Hello how r you ", (err) => {
//     if(err){
//         console.error(err);
//     }else{
//         console.log("file is succesfully written");
//     }
// })


/* Read The File */

// sync 

// const result = fs.readFileSync("./test.txt","utf-8")
// console.log(result);

// Async 

// fs.readFile("./demo.txt", "utf-8", (err,result) =>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("file on reading mode \n ",result);
//     }
// })

/* Append in the file */
// Sync 
// fs.appendFileSync("./test.txt", "\nlorem64")
// Async
// const c = fs.appendFileSync("./demo.txt", "\nHello " )


/* Copy Any File*/
// fs.copyFile("./index.js", "copy.txt", (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("copy created ");
        
//     }
// })

/* File Stats */

// const c= fs.statSync("./copy.js")
//     console.log(c.isDirectory());

/*File Delete */

// sync 

// fs.unlinkSync("./copy.txt", (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("file is deleted");
        
//     }
// })

// Async 

// fs.unlink("./copy.js",(err) =>{
//     if(err){
//         console.log(err);
//     }else{
//      console.log("file is deleted");
//     }
// })


// fs.mkdir("new-file ") 
// ,(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//     console.log(" directory is created ");
//     }
// })


    











