const {MongoClient}=require('mongodb');
const url='mongodb://localhost:27017';
const client=new MongoClient(url);

const db='Phones';

async function contact()
{
    let result=await client.connect();
    let database=result.db(db);
    let collection=database.collection('mobiles');
    // console.log(collection);
    // console.log("called");
    // let data= await collection.find().toArray();
    // console.log(data);
    return collection;
} 
module.exports=contact;
// console.log(contact());
