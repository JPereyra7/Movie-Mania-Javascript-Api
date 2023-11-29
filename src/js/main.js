import './../css/style.css';

const mainDiv = document.getElementById("app");

// Create container for input, button, and logo
const inputContainer = document.createElement("div");
inputContainer.className = "navClass";
mainDiv.appendChild(inputContainer);

const searchText = document.createElement("input");
searchText.className = "inputClass";
inputContainer.appendChild(searchText);

const leButton = document.createElement("button");
leButton.className = "buttonClass";
leButton.innerHTML = "Search...";
leButton.addEventListener("click", () => {
  const searchValue = searchText.value;

  // Create a container for the results
  const resultsContainer = document.createElement("div");
  resultsContainer.className = "resultsContainer";

  // Fetch data based on the input value
  fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=b15dbd6&s=${searchValue}`)
    .then((response) => response.json())
    .then((data) => {
      // Process the fetched data
      for (let i = 0; i < data.Search.length; i++) {
        const diva = document.createElement("div");
        diva.className = "container";

        const h1 = document.createElement("h1");
        h1.innerHTML = data.Search[i].Title;
        h1.className = "title";

        const h3 = document.createElement("h3");
        h3.innerHTML = data.Search[i].Year;
        h3.className = "year";

        const img = document.createElement("img");
        img.src = data.Search[i].Poster;
        img.className = "poster";

        diva.appendChild(img);
        diva.appendChild(h3);
        diva.appendChild(h1);
        resultsContainer.appendChild(diva);
      }

      // Clear existing results and append the new results container
      mainDiv.innerHTML = "";
      mainDiv.appendChild(inputContainer);
      mainDiv.appendChild(resultsContainer);
    });
});

// Append the button to the input container
inputContainer.appendChild(leButton);

// Append the logo to the input container
const logo = document.createElement("img");
logo.src = "/moviemania-logo.png";
logo.className = "logogo";
inputContainer.insertBefore(logo, searchText);
