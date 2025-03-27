// toujours verifie si un objet existe ( si il n'ets aps null ou undefined ) avant de tenter d'y accéder pour eviter des erreurs

export const genreFinder = (movie) => {
  // je verifie si movie existe OU si la propriété genre_ids existe dans l'objet movie ne sont pas null ou undefinied si c'est le cas je retourne null sinon je retourne un tableau vide

  // rappelle sans le ! if verifiera  est une vraie valeur (un objet non null, une chaîne de caractères non vide, un nombre différent de 0, etc.)
  if (!movie || !movie.genre_ids) {
    return null;
  }

  // ensuite je vais creer un objet qui va contenir les genres et leur id correspondant
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
    .map((id) => genres[id]) // remplacer les id par les genres correspondant dans le tableau  movie.genre_ids
    .filter(Boolean) // en gros il va me servir e eliminer les valeurs null ou undefinied si un genre ( ID ) n'existe pas dans l'objet genres
    .map((genre) => <li key={genre}>{genre}</li>); // Retourne un tableau de <li>
};

//!------------------- RAPPEL ---------------------------------

// pour me souvenir
//  En gros, je veux m'assurer qu'une clé existe et contient une valeur utilisable avant de tenter d'y accéder. Cela évite des erreurs
// d'abord je verifie si l'objet existe si l'objet existe ensuite je verifie si une clé existe dans l'objet si la clé existe je verifie si elle a une valeur valable

// exemple si
//  const movie = {
//   title: "Movie Title",
//   genre_ids: [28, 12] // Un tableau des genres
// };
