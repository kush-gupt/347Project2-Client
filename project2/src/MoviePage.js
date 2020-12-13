import React from 'react'
import {useDispatch} from 'react-redux';
import {search} from './actions';
import {Link} from 'react-router-dom';

export function MoviePage(props) {
    var movie = props.movie;
    const dispatch = useDispatch();
    const onSearch = () => {
        dispatch(search(document.getElementById('textbox').value));
      }
    if(movie === undefined) {
        movie = JSON.parse(localStorage.getItem("movie"));
    } else {
        localStorage.setItem("movie", JSON.stringify(movie));
    }
    const title = movie.original_title;
    const baseURL = "https://image.tmdb.org/t/p/original";
    const unavailable = "https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/500x735.png";
    if(movie.poster_path) {
        return (
            <React.Fragment>

            <div className="top">
            <a href="/"><img src='https://fontmeme.com/permalink/201213/ed9fb521c5ce730fca51654044a68288.png' alt="Movies2Watch"></img></a>
                <div className="searchbar">
                <form action="/action_page.php">
                    <input type="text" id="textbox" placeholder="Search..." name="search"></input>
                    <Link to={`/search/`}><input type="image" alt="search" id="search-button" onClick={onSearch} src={process.env.PUBLIC_URL + '/search.png'} /></Link>
                </form>
                </div>
            </div>
            <div className="body" id="movie-body">
                <div className="inner-body">
                    <h1 className="movie_title">{title}</h1>
                    <div className="movie-container">  
                        <div className="movie-info">
                            <div className="left-info">
                                <img className="movie_image" alt={movie.original_title} src={baseURL + movie.poster_path}></img>
                                <p className="movie_date">Release Date: {movie.release_date}</p>
                                <p className="movie_date">Average User Rating: {movie.vote_average}</p>
                            </div>
                            <div className="right-info">
                            <p className="movie_description"><strong>{movie.overview}</strong></p>
                        </div>
                    </div>
                    <div className="reviews">
                        <h1>User Reviews</h1>
                        <div className="review-list">
                            <form>
                                <label for="name">Name:</label>
                                <input type="text" id="name" name="name"></input>
                            </form>
                            <button type="button">Create Review</button>
                            {/* {reviews.map(review => <Link to={`/upcoming/${movie.original_title}`}><Movie key={movie.id} movie={movie} /></Link>)} */}
                            <p>Review 1</p>
                            <p>Review 2</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <footer>
                <p>Made using <a href="https://developers.themoviedb.org/3/getting-started/introduction">The Movie Database</a></p>
                <p>Developed by Kyle Vinsand and Kushal Gupta</p>
        </footer>
            </React.Fragment>
        )
    } else {
        return(
            <React.Fragment>

            <div className="top">
            <a href="/"><img src='https://fontmeme.com/permalink/201213/ed9fb521c5ce730fca51654044a68288.png' alt="Movies2Watch"></img></a>
                <div className="searchbar">
                <form action="/action_page.php">
                    <input type="text" id="textbox" placeholder="Search..." name="search"></input>
                    <Link to={`/search/`}><input type="image" alt="search" id="search-button" onClick={onSearch} src={process.env.PUBLIC_URL + '/search.png'} /></Link>
                </form>
                </div>
            </div>
            <div className="body">
                <h1 className="movie_title">{title}</h1>
                <img className="movie_image" alt="poster unavailable" src={unavailable}></img>
                <p className="movie_date">Release Date: {movie.release_date}</p>
                <p className="movie_description"><strong>{movie.overview}</strong></p>
                <div className="reviews">
                    <h1>User Reviews</h1>
                    <div className="review-list">
                    {/* {reviews.map(review => <Link to={`/upcoming/${movie.original_title}`}><Movie key={movie.id} movie={movie} /></Link>)} */}
                    </div>
                </div>
            </div>
            <footer>
                <p>Made using <a href="https://developers.themoviedb.org/3/getting-started/introduction">The Movie Database</a></p>
                <p>Developed by Kyle Vinsand and Kushal Gupta</p>
            </footer>
            </React.Fragment>
        )
    }
}