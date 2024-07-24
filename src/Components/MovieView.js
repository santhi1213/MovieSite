import { useEffect, useState } from "react";
import Hero from "./Hero";
import { useParams } from "react-router-dom";
import React from "react";

const MovieView = () =>{

    const { id } = useParams()
    console.log(id)

    const [ movieDetails, setMovieDetails ] = useState({}) 
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() =>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?&api_key=c9cfa4490f9c6e0cf3e14bca3417d29b&language=en-US`)
        .then(response => response.json())
        .then(data =>{
            setTimeout(()=>{
                setMovieDetails(data)
                setIsLoading(false)
            },1000)
        })
    },[id])

    function renderMovieDetails(){
        if(isLoading) {
           return <Hero text="Loading..."/>
        }
        if(movieDetails){
            const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
            const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
             return(
                <>
                    <Hero text={movieDetails.original_title} backdrop={backdropUrl}/>
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-md-3">
                                <img src={posterPath} alt="image..." className="img-fluid shadow rounded"/>
                            </div>
                            <div className="col-md-9">
                                <h2>{movieDetails.original_title}</h2>
                                <p className="lead">{movieDetails.overview}</p>
                                <p className="lead">Released on : {movieDetails.release_date}</p>
                                <p className="lead">Budget : {movieDetails.budget}</p>
                            </div>
                        </div>
                    </div>
                </>
             ) 

        }
    }

   
    return renderMovieDetails()

}

export default MovieView;