import React from "react";
import { genreFinder } from "../utils/genreFinder";

// petit rappelle toujours faire un destructuring des props pour eviter de faire props.movie et faire directement movie
const Card = ({ movie }) => {
  const dateFormater = (date) => {
    // j'ai utiliser la methode split pour separer les elements de la date et les mettre dans un tableau
    let [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="card">
      <img
        src={
          // je dis va chercher la propriété poster_path dans l'objet movie  si elle existe je vais concatener l'url de base avec la propriété poster_path sinon je vais afficher une image par defaut
          movie.poster_path
            ? "https://image.tmdb.org/t/p/original/" + movie.poster_path
            : "./img/poster.jpg"
        }
        alt={`affiche ${movie.title}`}
      />
      <h2>{movie.title}</h2>
      {/* m'assurer si la date existe je vais faire une ternaire pour afficher la date */}
      {movie.release_date ? (
        <h5>Sorti le : {dateFormater(movie.release_date)}</h5>
      ) : null}
      <h4>
        {movie.vote_average}/10 <span>⭐</span>
      </h4>
      {/* je ne verifie pas si movie_genre.ids existe car je l'ai deja fait dans le fichier genreFinder */}
      <ul>{genreFinder(movie)}</ul>
      {movie.overview ? <h3>Synopsis</h3> : ""}
      <p>{movie.overview}</p>
      <div className="btn">Ajouter aux coups de coeur</div>
    </div>
  );
};

export default Card;
