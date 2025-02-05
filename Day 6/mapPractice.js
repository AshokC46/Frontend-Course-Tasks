const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log("Original numbers:", numbers);
console.log("Doubled numbers:", doubled);

const movieList = [
  { title: "Movie 1", price: 200 },
  { title: "Movie 2", price: 150 },
  { title: "Movie 3", price: 300 },
];

const formattedMovies = movieList.map((movie) => {
  return {
    title: movie.title,
    formattedPrice: `₹${movie.price}`,
  };
});

console.log("Formatted Movies:", formattedMovies);

const showTimings = [
  { time: "10:00 AM", seats: 50 },
  { time: "2:00 PM", seats: 0 },
  { time: "6:00 PM", seats: 25 },
];

const availabilityStatus = showTimings.map((show) => {
  return {
    time: show.time,
    status: show.seats > 0 ? "Available" : "Housefull",
    seatsLeft: show.seats,
  };
});

console.log("Show Availability:", availabilityStatus);



const movies = [
  { title: "Thandell", rating: 8.9, price: 200 },
  { title: "Pushpa 2", rating: 8.7, price: 300 },
  { title: "Daku Maharaj", rating: 8.3, price: 500 },
  { title: "RRR", rating: 8.5, price: 400 },
  { title: "KGF 2", rating: 8.0, price: 250 },
];

const premiumMovies = movies.map((movie) => {
  return {
    Title: movie.title,
    premiumPrice: movie.price + 100,
    Recommendation: movie.rating > 8.5 ? "Must watch" : "For Movie Lovers",
  };
});

console.log("Movie recommendations:", premiumMovies);

