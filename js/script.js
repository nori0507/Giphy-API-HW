console.log("script.js loaded");

const endpoint = "https://api.giphy.com/v1/gifs/search?api_key=V83DiBIHOu3SR4NMOo2N38wCXAiebbTH&q=dogs&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips"

// building a function to get GIF information
async function getGIF() {
// requesting data
const response = await fetch(endpoint);
// converting data to json
const data = await response.json();
// seeing what we get from the converted data
console.log(data);
// I found out the data was separated into few parts such as data, meta, pagnation
// since I wanted to store unique URLs to the array images, I assinged data.data (data was the array with 25 unique URLs) into images
// since data.data is array, image is array
const images = data.data
// cheking if imge is the array with unique URLs
console.log(images)

}
getGIF()
