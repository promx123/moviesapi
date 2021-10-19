import { useEffect, useState } from "react";
import { useQuery } from "../hooks/useQuery";

import { get } from "../utils/httpClient";

import { MovieCard } from "./MovieCard";
//import movies from './movies.json'
import styles from "./MoviesGrid.module.css";
import { Spinner } from "./Spinner";



export function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const query = useQuery();
  const search = query.get("search");

  //aca usamos la fetch api para hacer consultas y asi es la manera profesional de hacerlo
  useEffect(() => {
    // va despues de cargar todo el componente de abajo
    setisLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search
      : "/discover/movie"
       get(searchUrl).then((data) => {
          setMovies(data.results);
          //console.log(movies)
          setisLoading(false);
        });
  }, [search]); // el [] es para que no se repita el ciclo del state
  //
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ul className={styles.moviesGrid}>
      {movies.map(
        (
          movie // con {} tenes que devolver un return
        ) => (
          <MovieCard key={movie.id} movie={movie} />
        )
      )}
    </ul>
  );
}
