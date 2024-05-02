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

const insert=async()=>{
    const db= await dbConnect()
    const result=await db.insertOne(
        {
            name:'note5',
            brand:'vivo',
            price:'300'
        }
    )
    console.log(result)
    if(result.acknowledged ){
        console.log('data Inserteed')
    }
}
insert()