
export const myFetcher = async (url: string) => {
    const result = await fetch(`https://jsonplaceholder.typicode.com/${url}`)
    try {
        if (result.ok) {
            const data = await result.json()
            return data
        }
        else {
            throw new Error("Fetch failed with code: "
                + result.statusText + " at: " + url)
        }
    }
    catch (error: any) {
        return {
            error: error.message
        }
    }
}