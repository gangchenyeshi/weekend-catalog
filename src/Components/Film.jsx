import React from "react";
import movies from "./../movies.js";

class Film extends React.Component {
    render() {
        return (
            <>
                {movies.filter((movie) => {
                    return (
                        movie.id === parseInt(this.props.match.params.id)
                    )
                }).map((movie) => {
                    return (
                        <div>
                            <h2>Title : {movie.title}</h2>
                            <img src={movie.image} alt={movie.title}></img>
                            {/* <h4>Actor : {movie.stars.map((star) =>   {
                                return {star};
                            })}</h4> */}
                            <h4>Actor : {movie.stars}</h4>
                            <h4>Director : {movie.director}</h4>
                            <p> Description : {movie.description}</p>
                        </div>

                    )
                })}

            </>
        );
    }
}
export default Film;