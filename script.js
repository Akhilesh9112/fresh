const express= require("express");
const app=express();

let port=8080;

console.dir(app);

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});