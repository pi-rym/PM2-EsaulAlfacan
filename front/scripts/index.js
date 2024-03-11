//Declarate a variable for the tempdata
// const DATA_MOVIES = tempData;

$.get("https://students-api.2.us-1.fl0.io/movies", (data) => {
  const DATA = data;

  //Create a execution code for the map method
  DATA.map((movie) => {
    //Step 1: create a container to mavie information
    const CARD_MOVIE = document.createElement("div");
    CARD_MOVIE.classList.add("movie__card");

    //Step 2: create a element to capture the information of the objetc movie
    const CARD__DATA = document.createElement("div");
    (CARD__DATA.classList.add = "movie__data"), "card-body";
    // Title and your class
    const CARD__TITLE = document.createElement("h4");
    CARD__TITLE.classList.add("movie__title");
    // Year and your class
    const CARD__YEAR = document.createElement("p");
    CARD__YEAR.classList.add("movie__info");
    // Director and your class
    const CARD__DIRECTOR = document.createElement("p");
    CARD__DIRECTOR.classList.add("movie__info");
    // Duration and your class
    const CARD__DURATION = document.createElement("p");
    CARD__DURATION.classList.add("movie__info");
    // Genre and your class
    const CARD__GENRE = document.createElement("p");
    CARD__GENRE.classList.add("movie__info");
    // Rata and your class
    const CARD__RATE = document.createElement("p");
    CARD__RATE.classList.add("movie__info");
    // Poster and your class
    const CARD__POSTER = document.createElement("img");
    CARD__POSTER.classList.add("movie__img");
    CARD__POSTER.alt = "Imagen de referencia";

    //Reference info of the object with your´s constans
    CARD__TITLE.textContent = movie.title;
    CARD__YEAR.innerHTML = movie.year;
    CARD__DIRECTOR.textContent = movie.director;
    CARD__DURATION.textContent = movie.duration;
    CARD__GENRE.textContent = movie.genre;
    CARD__RATE.textContent = movie.rate;
    CARD__POSTER.src = movie.poster;

    CARD__DATA.append(
      CARD__TITLE,
      CARD__YEAR,
      CARD__DIRECTOR,
      CARD__DURATION,
      CARD__GENRE,
      CARD__RATE
    );
    //Append to CARD_MOVIE
    CARD_MOVIE.append(CARD__DATA, CARD__POSTER);

    //Obtain the id for the container to information movies
    const CONTAINER_MOVIES = document.getElementById("movieOthers");
    CONTAINER_MOVIES.appendChild(CARD_MOVIE);
  });
});
