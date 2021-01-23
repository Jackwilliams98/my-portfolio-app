import React from 'react'
import styles from 'styles/components/movieItem.module.css';

const MovieItem = ({ movie }) => {
    const Movie = movie;
    const MovieID = Movie.id;
    const MovieTitle = Movie.title;
    const MovieReleaseDate = Movie.release_date;
    const MoviePoster = Movie.poster.url;

    return (
        <li className={styles.itemContainer} key={MovieID}>
            <img 
                className={styles.moviePoster}
                src={`http://localhost:1337${MoviePoster}`}/>
            <span className={styles.movieDescription}>
                <span className={styles.movieTitle}><b>Title:</b> {MovieTitle}</span>
                <span className={styles.movieDate}><b>Release Date:</b> {MovieReleaseDate}</span>
            </span>
        </li>
    )
}

export default MovieItem
