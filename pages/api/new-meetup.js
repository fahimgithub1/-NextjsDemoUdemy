// import {MongoClient} from "mongodb";

// export default async function handler(req, res){
//     if(req.method === 'POST'){
//         const data = req.body;
    
//        const client = await MongoClient.connect('mongodb+srv://Fahim:Fahim1234@cluster0.lgls0cr.mongodb.net/meetups?retryWrites=true&w=majority'); 
    
//        const db = client.db();

//        const meetupsCollection = db.collection('meetups');

//        const result = await meetupsCollection.insertOne(data);
//        console.log(result);

//        client.close();

//        res.status(201).json({message: 'meetup iserted!'});
//     }
// }