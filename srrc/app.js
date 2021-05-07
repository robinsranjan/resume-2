const express=require("express")
const app=express()
const path=require("path")
const port=process.env.Port||5000

staticpath=path.join(__dirname,"../public")

app.use(express.static(staticpath))



app.set('view engine','hbs')

app.get("/",(req,res)=>{
     res.render("index")
})
 
  
app.listen(port,()=>{
    console.log(`port number${port}`)
})