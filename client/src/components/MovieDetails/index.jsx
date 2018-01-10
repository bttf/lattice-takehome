import React, { PureComponent } from 'react';
import './styles.scss';

export default class MovieDetails extends PureComponent {
  componentDidMount() {
    // quick hack to make sure browser is at top of page on load
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  render() {
    const movie = this.props.movie;

    return (
      <div className="movie-details">
        <div className="nav" onClick={this.props.clearSelectedMovie}>
          ⬅️ Back
        </div>
        <div className="poster">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Movie poster" />
        </div>
        <div className="body">
          <div className="title">{movie.original_title}</div>
          {movie.tagline && <div className="tagline">"{movie.tagline}"</div>}
          {movie.status && <div className="status"><strong>Status: </strong>{movie.status}</div>}
          {movie.vote_average && <div className="ratings"><strong>Rating:</strong> {movie.vote_average}/10 <small>({movie.vote_count} votes)</small></div>}
          {movie.budget && <div className="budget"><strong>Budget:</strong> ${movie.budget}</div>}
          {movie.runtime && <div className="runtime"><strong>Runtime:</strong> {movie.runtime} min</div>}
          <div className="overview">{movie.overview}</div>
          <div className="links">
            {movie.homepage && <div>🔗 <a href={movie.homepage}>Homepage</a></div>}
            {movie.imdb_id && <div>🔗 <a href={`http://www.imdb.com/title/${movie.imdb_id}`}>IMDB</a></div>}
          </div>
        </div>
      </div>
    );
  }
}
