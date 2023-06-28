import { Link , useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Container } from "./styles"


function Details(){
    const {id} = useParams()
    console.log(id)
    const [movie, setMovie] = useState([])
    const image_path = 'https://image.tmdb.org/t/p/w500/'

    useEffect(() => {
        
        const options = {
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NGRkMWEwMjk5NWZkZGE5ODIyMmFkOGUxNjM4NDQyMiIsInN1YiI6IjY0N2I0NGViY2FlZjJkMDBkZjg4ODMxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n4DGc1IQ8y2s-AOoFcWxaC6318gdTFJLlaCRJN_2Kjg'
            }
        };
        
        fetch('https://api.themoviedb.org/3/movie/'+id+'?language=en-US&page=1', options)
            .then(response => response.json())
            .then(data => {
                const {title , poster_path, overview, release_date} = data

                const movie = {
                    id,
                    title,
                    sinopse: overview,
                    image: `${image_path}${poster_path}`,
                    release_date
    
                }
                console.log(data)
                setMovie(movie)
            })
        },[id])
    


    
    return(
        <Container>
            <div className = 'movie'>
                <img src={movie.image} alt= {movie.sinopse}/>
                <div className = 'details'>
                    <h1> {movie.title} </h1>
                    <span>Sinopse: {movie.sinopse}</span>
                    <span className='release-date'>Release date: {movie.release_date}</span>
                    <Link to= "/"> <button>Go Back</button> </Link>
                </div>
            </div>
        </Container>
    )
}



export default Details