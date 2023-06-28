import { Container, MovieList, Movie } from "./styles"
import { useState , useEffect } from 'react'
import { Link } from "react-router-dom"

function Home(){

    const [movies, setMovies] = useState([])
    const image_path = 'https://image.tmdb.org/t/p/w500/'

    useEffect(() => {
        
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NGRkMWEwMjk5NWZkZGE5ODIyMmFkOGUxNjM4NDQyMiIsInN1YiI6IjY0N2I0NGViY2FlZjJkMDBkZjg4ODMxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n4DGc1IQ8y2s-AOoFcWxaC6318gdTFJLlaCRJN_2Kjg'
            }
          };
          
          fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
            .then(response => response.json())
            .then(data => setMovies(data.results))
            .catch(err => console.error(err));
    }, []    
    )

    return(
        <Container>
        <h1>Movies</h1>
        <MovieList>
            {movies.map(
                movie => {
                    return(
                    <Movie key={movie.id}>
                        <Link to = {`/details/${movie.id}`}>
                        <img src={`${image_path}${movie.poster_path}`} alt={movie.title}></img>
                        </Link>
                        <span>{movie.title}</span>
                    </Movie>
                    )
                }
            )
            }
            

        </MovieList>
        </Container>
    )

}

export default Home