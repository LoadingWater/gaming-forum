let airbnb 

module.exports = class AirbnbDAO
{
    static async injectDB(conn)
    {
        if (airbnb)
        {
            return
        }
        try
        {
            //airbnb = await conn.db(process.env.ATLAS_SAMPLE_URI).collection("listingsAndReviews")
        }
        catch (e)
        {
            console.error(`Unable to establish a collection handle in airbnbDAO: ${e}`)
        }
    }

    static async getAirbnb()
    {
        let query 
        let cursor
        try
        {
            cursor = await airbnb.find(query)
        }
        catch(e)
        {
            console.error(`Unable to issue find command, ${e}`)
            return { airbnbList: [], totalNumResults: 0 }
        }

        const displayCursor = cursor.limit(10)

        try 
        {
            const airbnbList = await displayCursor.toArray()
            const results = await airbnb.countDocuments(query)
            return { airbnbList, results }
        }
        catch(e)
        {
            console.error(`Unable to convert cursor to array or problem counting documents, ${e}`)
            return { airbnbList: [], totalNumResults: 0 }
        }
    }
}