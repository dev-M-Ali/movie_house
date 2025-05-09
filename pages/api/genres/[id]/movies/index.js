import { MongoClient } from "mongodb";

export default async function handler(req, res) {
    if (req.method === "GET")
    {
        const client = await MongoClient.connect(process.env.DATABASE_URL)
        const db = client.db("MovieHouseDB");
        const genre = await db.collection("genres").findOne({ _id: req.query.id })
        //console.log(genre)

        if (genre == null)
            res.status(200).json()

        const movies = await db.collection("movies").find({ genreId: genre._id }).toArray()
        console.log(movies)
        res.status(200).json({ movies })
    }
}