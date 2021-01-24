import styles from 'styles/pages/index.module.css';
import fetch from 'isomorphic-unfetch';
import MovieItem from 'components/MovieItem';

const index = ({ movies }) => {
  // const Movies = movies;

  const Movies = [
    {
      id: 1,
      title: "king kong",
      release_date: "2005-12-15",
      poster: {
        url: "https://i.ibb.co/j83whFP/King-kong.jpg",
      }
    }
  ]

  return (
    <div className={styles.container}>
      <div className={styles.movieContainer}>
        <ul className={styles.movieList}>
        {Movies.map((movieObject, i) => {
          return <MovieItem movie={movieObject} key={i} />
        })}
        </ul>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const { API_URL } = process.env

  const res = await fetch(`${API_URL}/movies`)
  // console.log('hello: ', res)
  const data = await res.json()

  return {
    props: {
      movies: data
    }
  }
}

export default index