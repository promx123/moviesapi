import { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react/cjs/react.development";
import { Spinner } from "../components/Spinner";

import { get } from "../utils/httpClient";
//import movie from "./movie.json";
import styles from "./MovieDetails.Module.css";

export function MovieDetails() {
  const { movieId } = useParams();

  const [isLoading, setIsLoading] = useState(true); // true xq el valor inicial esta cargando

  const [movie, setMovie] = useState(null);

  //console.log(movieId)
  useEffect(() => {
    setIsLoading(true);
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setIsLoading(false);
    });
  }, [movieId]); // esto se repite cada vez que cambia el movie id

  //solucion parcial

  if (isLoading) {
    return <Spinner />;
  }

  const imagenUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={imagenUrl}
        alt={movie.title}
      />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstItem}>
          <strong>Title:</strong> {movie.title}{" "}
        </p>
        <p>
          <strong>Description:</strong>
          {movie.overview}{" "}
        </p>
        <p>
          <strong>Genres:</strong>{" "}
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
      </div>
    </div>
  );
}
