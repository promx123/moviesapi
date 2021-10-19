import { Link } from "react-router-dom"
import styles from "./MovieCard.module.css"

export function MovieCard({movie}){
    const imagenUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path
    return <li className={styles.movieCard}>
        <Link to={"/movies/"+ movie.id}>
       <div> {movie.title}</div>
        <img width={230} height={345} //esto es importante para que se no se junten las images con el texto
         className={styles.movieImage} src= {imagenUrl} alt=""/> 
         </Link>
        </li>
}