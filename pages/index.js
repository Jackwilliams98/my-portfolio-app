import styles from 'styles/pages/index.module.css';
import fetch from 'isomorphic-unfetch';
import MovieItem from 'components/MovieItem';

const index = ({ movies }) => {
  const Movies = movies;

  return (
    <div className={styles.container}>
      <div className={styles.movieContainer}>
        <ul className={styles.movieList}>
        {Movies.map((movieObject, i) => {
          return <MovieItem movie={movieObject} />
        })}
        </ul>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const { API_URL } = process.env

  const res = await fetch(`${API_URL}/movies`)
  const data = await res.json()

  return {
    props: {
      movies: data
    }
  }
}

export default index