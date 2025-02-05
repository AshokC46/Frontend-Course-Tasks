const movieCollection = [
  {
    title: "Dead Pool 1",
    price: 300,
    seatsAvailable: 50,
    ratings: 4.2,
  },

  {
    title: "Dead Pool 2",
    price: 400,
    seatsAvailable: 0,
    ratings: 4.6,
  },
  {
    title: "Harry Potter",
    price: 250,
    seatsAvailable: 40,
    ratings: 4.5,
  },
  {
    title: "Fast and Furious",
    price: 400,
    seatsAvailable: 10,
    ratings: 4.7,
  },
  {
    title: "Spider Man",
    price: 350,
    seatsAvailable: 0,
    ratings: 4.4,
  },
];

const allMovies = movieCollection.map((mustwatch) => {
  return {};
});

console.log("collection of movies:", movieCollection);

const moviesList = movieCollection.map((movieSeats) => {
  return {
    status:
      movieSeats.seatsAvailable > 0 ? "youCanWatch" : "BetterLuckNextTime",
  };
});

console.log("availableMovies:", moviesList);
