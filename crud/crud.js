const express = require('express');
const mongodb = require('mongodb');
let middleware = require('../app');

const Route = express.Router();

const connect = require('../mongoconn/connectmongo');


Route.get('/data', async (req, res) => {
    let result1 = await connect();
    let data = await result1.find().toArray();
    res.send(data);
})

Route.post('/data', async (req, resp) => {

    let result1 = await connect();
    const result2 = await result1.insertOne(req.body);
    console.log(result2);
    if (result2.acknowledged) {
        console.log("data Inserted");
    }
})


Route.put('/data', async (req, res) => {
    let result = await connect()
    let data = await result.updateOne({ Name: "Karbonn" },{ $set: { Name: "Samsung" } });
    if (data.acknowledged) {
        console.log("Updated");
    }
});

Route.delete('/data', async (req, res) => {
    let price=req.query;
    let result = await connect()
    let data = await result.deleteOne(price);
    if (data.acknowledged) {
        console.log("deleted");
    }
})
module.exports = Route;
