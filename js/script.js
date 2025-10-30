console.log("script.js loaded");

const endpoint = "https://api.giphy.com/v1/gifs/search?api_key=V83DiBIHOu3SR4NMOo2N38wCXAiebbTH&q=dogs&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips"

let images = [];
// building a function to get GIF information
async function getGIF() {
    // requesting data
    const response = await fetch(endpoint);
    // converting data to json
    const converted = await response.json();
    // seeing what we get from the converted data
    console.log(converted);
    // assigning unique URLs into images array
    // From the API responce, we know the path for the URL
    // converted -> data -> images -> original -> url
    // .map() function iterate every GIF and the URL will be stored into the images array
    images = converted.data.map(gif => gif.images.original.url);
    // cheking if imge is the array with unique URLs
    console.log(images)

}
getGIF()

 


