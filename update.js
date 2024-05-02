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

const update= async ()=>{
    const db= await dbConnect()
    const result = await db.updateOne(
        {name:'galaxy1'},
        {$set:{name:'note 8',price:"400"}}
    )
    if(result.acknowledged){
        console.log('updated')
    }
    else{
        console.log('data not updated')
    }

    
}
update()