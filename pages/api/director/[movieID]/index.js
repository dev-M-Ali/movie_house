const { getDirectorDetails } = require("@/data/data-utility");

export default async function handler(request, response) {
    if (request.method === 'GET')
    {
        const requiredInfo = await getDirectorDetails(request.query.movieID)
        console.log("In api call for directorInfo -> requiredInfo contains: ")
        console.log(requiredInfo)

        response.status(200).json({ directorInfo: requiredInfo });
    }
}