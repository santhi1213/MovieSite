import { Link } from "react-router-dom";
import Hero from "./Hero";

const MovieCard = ({ movie }) =>{

    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const detailUrl = `/movies/${movie.id}`

    return(
        <div className="col-lg-3 col-md-3 col-2 my-4">
            <div className="card">
                <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
                <div className="card-body">
                    <h5 className="card-title">{movie.original_title}</h5>
                    <Link to={detailUrl} className="btn btn-primary">Show details</Link>
                </div>
            </div>
        </div>
    )
}

const SearchView = ({keyword, searchResult}) =>{


    const title =  `You are searching for ${keyword}`;
    console.log(searchResult, "is the search results");

    const resultHTML = searchResult.map((obj, i)=>{
        return <MovieCard movie={obj} key={i} />
    })

    return(
        <>
            <Hero text={title}/>
            {resultHTML &&
            <div className="container">
                <div className="row">
                    {resultHTML}
                </div>
            </div>
            }
        </>
    )
}
    
export default SearchView;