export const genreFinder = (movie) => {
  if (!movie || !movie.genre_ids) {
    return null; // Retourne null si movie ou genre_ids est undefined
  }

  const genres = {
    28: "Action",
    12: "Aventure",
    16: "Animation",
    35: "Comédie",
    80: "Crime",
    99: "Documentaire",
    18: "Drame",
    10751: "Familial",
    14: "Fantastique",
    36: "Histoire",
    27: "Horreur",
    10402: "Musique",
    9648: "Mystère",
    10749: "Romance",
    878: "Science-Fiction",
    10770: "Téléfilm",
    53: "Thriller",
    10752: "Guerre",
    37: "Western",
  };

  return movie.genre_ids
    .map((id) => genres[id]) // Mappe les IDs aux noms des genres
    .filter(Boolean) // Filtre les genres non définis
    .map((genre) => <li key={genre}>{genre}</li>); // Retourne un tableau de <li>
};
