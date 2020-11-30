const express = require ('express');
const PORT=3000;
const app =express();
const data =require('./data.json');
let bodyParser=require('body-parser');
let cors = require('cors');
app.use(cors())
let corsOptions={
    origin:"",
}
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json());

app.get('/api/list',(req,res)=>{                  
    res.send(data)
})
app.post('/api/form/',
(req,res)=>{
    let d =req.body                                     //push to table using post
    console.log(d)
    data.push(d)
    res.status('200').json({message:'User Added'});
})
const port=process.env.PORT||3000;
app.listen(port,()=>console.log(`listening on ${port}`));
