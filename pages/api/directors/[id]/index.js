import { MongoClient } from "mongodb";

export default async function handler(req, res) {
    if (req.method === "GET")
    {
        const client = await MongoClient.connect(process.env.DATABASE_URL)
        const db = client.db("MovieHouseDB");
        const director = await db.collection("directors").findOne({ _id: req.query.id })

        if (director == null)
            res.status(200).json()

        const movies = await db.collection("movies").find({ directorId: director._id }).toArray()
        res.status(200).json({ director, movies })
    }
}