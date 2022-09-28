const fs =require("fs");

fs.writeFile("welcome.txt","Hello Node",(err)=>{
    if(err){
        console.log("error");
    }else {
        console.log("file created");
    }
   
});


fs.readFile("welcome.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});