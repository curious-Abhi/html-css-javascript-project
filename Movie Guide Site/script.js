const searchForm = document.querySelector('form');
const movieContainer = document.querySelector('.movie-container');
const inputBox = document.querySelector('.inputBox');

// Function to fetch movie details using OMDB API
const getMovieInfo = async (movie) => {
    const myApiKey = "83b52cf";
    const url = `https://www.omdbapi.com/?apikey=${myApiKey}&t=${movie}`;


    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        // Call the showMovieData function to display movie information
        showMovieData(data);
    } catch (error) {
        console.error('Error fetching movie information:', error);
        showErrorMessage("Error fetching movie information");
    }
};

// Function to show movie data on the screen
const showMovieData = (data) => {

    movieContainer.innerHTML = "";
    movieContainer.classList.remove('noBackground');

    const { Title, imdbRating, Genre, Released, Runtime, Actors, Plot, Poster } = data;

    const movieElement = document.createElement('div');
    movieElement.classList.add('movie-info');
    movieElement.innerHTML = `<h2>${Title}</h2>
                              <p><strong>Rating: &#11088;</strong>${imdbRating}</p>`;
    const movieGenreElement = document.createElement('div');
    movieGenreElement.classList.add('movie-genre');

    Genre.split(",").forEach(element => {
        const p = document.createElement('p');
        p.innerText = element;
        movieGenreElement.appendChild(p);
    });

    movieElement.appendChild(movieGenreElement);

    movieElement.innerHTML += `<p><strong>Released date: </strong>${Released}</p>
                            <p><strong>Duration: </strong>${Runtime}</p>
                            <p><strong>Cast: </strong>${Actors}</p>
                            <p><strong>Plot: </strong>${Plot}</p>`;

    // Creating a div for the movie poster
    const moviePosterElement = document.createElement('div');
    moviePosterElement.classList.add('movie-poster');
    moviePosterElement.innerHTML = `<img src="${Poster}" alt="Movie Poster"/>`;
    movieContainer.appendChild(moviePosterElement);

    movieContainer.appendChild(movieElement);
};

// Function to display error message
const showErrorMessage = (message) => {
    movieContainer.innerHTML = `<h2>${message}</h2>`; // Corrected the template literal
    movieContainer.classList.add('noBackground');
};

// Function to handle form submission
const handleFormSubmission = (e) => {
    e.preventDefault();
    const movieName = inputBox.value.trim();
    if (movieName !== '') {
        showErrorMessage("Fetching Movie information");
        getMovieInfo(movieName);
    } else {
        showErrorMessage("Enter movie name to get movie information");
    }
};

// Adding event listener
searchForm.addEventListener('submit', handleFormSubmission);
