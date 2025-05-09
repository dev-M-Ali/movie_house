import { MongoClient } from "mongodb";

export default async function handler(req, res) {
    if (req.method === "GET")
    {
        const client = await MongoClient.connect(process.env.DATABASE_URL)
        const db = client.db("MovieHouseDB");
        const result = await db.collection("genres").find().toArray()

        console.log(result)

        res.status(200).json({ genres: result })
    }
}