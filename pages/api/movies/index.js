import { MongoClient } from "mongodb";

export default async function handler(req, res) {
    if (req.method === "GET")
    {
        const client = await MongoClient.connect(process.env.DATABASE_URL)
        const db = client.db("MovieHouseDB");
        const result = await db.collection("movies").find().toArray()

        console.log(result)

        //To get detailed information about each movie
        res.status(200).json({ movies: result })

        //To get limited information about each movie
        // const movies = result.map(val => {
        //     return { title: val.title, description: val.description, releaseYear: val.releaseYear, rating: val.rating }
        // })
        // res.status(200).json({ movies })
    }
}