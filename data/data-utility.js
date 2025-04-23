import fs from 'fs/promises'
import path from 'path';

//Data format:
//Object containing arrays containing objects
export async function readDataFromFile() {
    const p = path.join(process.cwd(), 'data', 'data.json');
    const datajson = await fs.readFile(p);

    if (datajson.length === 0)
    {
        return null
    }
    else
    {
        const data = JSON.parse(datajson);
        //console.log(data);
        return data
    }
}

//We will consider movies that have released in or after 2022 and 8+ rating as trending movies 
export async function getTrendingMovies() {
    const data = await readDataFromFile()

    if (data)
        return data.movies.filter((val) => {
            return val.releaseYear >= 2022 && val.rating >= 8
        })
    else
        return null
}

export async function getMovieWithDirector(id) {
    const data = await readDataFromFile()

    if (data)
    {
        const movie = data.movies.find((val) => {
            return val.id === id
        })

        movie.director = data.directors.find((director) => director.id === movie.directorId).name

        return movie
    }
    else
        return null
}

export async function getDirectorDetails(movieID) {
    const data = await readDataFromFile()

    if (data)
    {
        const requiredMovie = data.movies.find(movie => {
            return movie.id === movieID
        })

        //console.log("In data-utility -> requiredMovie is: ")
        //console.log(movieID)

        const requiredDirector = data.directors.find(director => {
            return requiredMovie.directorId === director.id
        })

        const moviesWithSameDirector = data.movies.filter(movie => {
            return movie.directorId === requiredDirector.id
        })

        //console.log("In data-utility -> movies with same director are: ")
        //console.log(moviesWithSameDirector)

        requiredDirector.moviesDirected = moviesWithSameDirector

        //console.log("In data-utility -> requiredDirector object now is: ")
        //console.log(requiredDirector)

        return requiredDirector
    }
    else
        return null
}


export async function getGenres() {
    const data = await readDataFromFile()

    if (data)
    {
        return data.genres
    }
    else
        return null
}

export async function getMoviesByGenre(genreID) {
    const data = await readDataFromFile()

    if (data)
    {
        return data.movies.filter(movie => {
            return genreID === movie.genreId
        })
    }
    else
        return null
}
