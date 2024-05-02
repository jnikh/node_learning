const {MongoClient}=require('mongodb')
const url='mongodb://localhost:27017'
const database= 'learning'
const client =new MongoClient(url)

async function dbConnect(){
    let result=await client.connect()
    let db=result.db(database)
    return db.collection('product')
    // let response = await collection.find({name:'galaxy'}).toArray();
    // console.log(response)
}

// dbConnect().then((resp)=>{
//      resp.find({}).toArray().then((data)=>{
//       console.warn(data)
//      })
// })

const main =async()=>{
   let data= await dbConnect()
   data=await data.find({name:'galaxy'}).toArray();
   console.warn(data)
}
main()