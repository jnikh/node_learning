const dbConnect = require('./mongodb');
const express = require('express');
const app = express();
//creating middleware 
app.use(express.json());
app.get('/',async (res,resp)=>{
    let data = await dbConnect();
    data= await data.find().toArray();
    resp.send(data);
});


app.post("/", async (req,resp)=>{
    let data = await dbConnect();
    let result = await data.insertOne(req.body)
    resp.send(result)

})

app.put('/:brand',async (req,resp)=>{
  let data= await dbConnect()
  let result = data.updateOne(
    {name: req.params.brand},{$set:req.body})
 
  resp.send({result:"updated"})
})

app.listen(5000)