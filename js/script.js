console.log("script.js loaded");


// declaring images as array
let images = [];


// building a function to get GIF information
// adding parameter so that the endpoint can be changed according to the user's input
async function getGIF(search) {
    // adapting the API key to the user input by using string interpolation
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=V83DiBIHOu3SR4NMOo2N38wCXAiebbTH&q=${search}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
    // requesting data
    const response = await fetch(endpoint);
    // converting data to json
    const converted = await response.json();
    // seeing what we get from the converted data
    console.log(converted);
    /* 
       assigning unique URLs into images array
       From the API responce, we know the path for the URL
       converted -> data -> images -> original -> url
       .map() function iterate every GIF and the URL will be stored into the images array 
    */
    images = converted.data.map(gif => gif.images.original.url);
    // cheking if images is the array with unique URLs
    console.log(images);
}


// creating the variable that will be used to get an input
const sInput = document.querySelector("#search-input");
// creating a container to store all the GIF
const GIFContainer = document.querySelector("#gif-container");
// selecting the button that user can push
const button = document.querySelector("#fetch-gif-btn");


// activating a the button when it is clicked
// making sure that the function is async by putting "async" infront of function 
button.addEventListener("click", async function(){
  /* 
     the following line is for cleaning the search result each time 
     without this all the images from earlier searches remained on the screen, so I introduced this line to solve that. 
  */
  GIFContainer.innerHTML = "";
  // getting the value the user entered once the button is clicked
  const search = sInput.value;
  /* 
     the following function has to be called after we have an input from the user(this was called right after the function defined earlier)
     otherwise, we do not know what to search for
     Using "await" is a key, otherwise the code will not wait untile the loading is finished
     without "await", I kept getting NO GIF on the website 
  */
  await getGIF(search);
  // loop through the elements of images
  for (let i =0; i< images.length; i++) {
    // adding images into the GIF container
    GIFContainer.innerHTML += `<img src="${images[i]}" class="col-3 mb-3">`;
  }
});




