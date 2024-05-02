const {MongoClient} = require('mongodb');
const url='mongodb://localhost:27017';
const database='learning'
const client =new MongoClient(url)

 async function dbConnect(){
    let result = await client.connect()
    let db=result.db(database)
    return db.collection('product')
    console.log(result)
}
 
const delet=async ()=>{
    const db= await dbConnect()
    const result = await db.deleteOne(
        {name:'galaxy phone'}
    )
    console.log(result)

}
delet()