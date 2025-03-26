import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

const Form = () => {
  const [moviesData, setMoviesData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=War&language=fr-FR`
      )
      .then((res) => setMoviesData(res.data.results));
  }, []);
  return (
    <div className="form-component">
      <div className="form-container">
        <form>
          <input
            type="text"
            placeholder="Rechercher un film"
            id="search-input"
          />
        </form>
        <div className="btn-sort-container">
          <div className="btn-sort" id="goodToBad">
            Top<span>➜</span>
          </div>
          <div className="btn-sort" id="badToGood">
            Flop<span>➜</span>
          </div>
        </div>
      </div>
      <div className="result">
        {/* rappelle ouvrir les {} pour écrire du JS dans du JSX  */}
        {/* avant de faire le map je veux 12 resulat en utilisant la methode slice  */}
        {/* chaque element de chaque tour de boucle je vais appeler movie et avoir une clé unique  */}

        {moviesData.slice(0, 12).map((movie) => (
          //  a chaque tour de boucle tu vas voir le component card et tu vas lui passer les props movie
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Form;
