import express  from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url))
app.use(bodyParser.urlencoded({extended:true}))

let newElems = [];

app.get("/" , (req , res)=>{
    res.render("index.ejs" , {
        addedItems : newElems
    })
})

app.post("/submit" , (req , res)=>{
   let newElem = req.body.newItem;
    newElems.push(newElem);
    res.redirect("/")
})

app.listen(port , ()=>{
    console.log(`${port}`);
})