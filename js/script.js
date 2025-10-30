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
    // cheking if images is the array with unique URLs
    console.log(images)
}
getGIF()


   
// creating a container to store all the GIF
const GIFContainer = document.querySelector("#gif-container");
// selecting the button that usercan push
const button = document.querySelector("#fetch-gif-btn");

// activating a the button when it is clicked
// making sure that the function is async
button.addEventListener("click", async function (){
  // loop through the element of images
  for (let i =0; i< images.length; i++) {
    // adding images into the GIF container
    GIFContainer.innerHTML += `<img src="${images[i]}" class="col-3 mb-3">`;
  }
});


 


