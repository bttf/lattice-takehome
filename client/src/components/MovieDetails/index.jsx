import React, { PureComponent } from 'react';
import './styles.scss';

export default class MovieDetails extends PureComponent {
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
          {movie.status? <div className="status">{movie.status}</div> : ''}
          {movie.tagline ? <div className="tagline">"{movie.tagline}"</div> : ''}
          <div className="ratings">Rating: {movie.vote_average} <small>({movie.vote_count} votes)</small></div>
          {movie.budget ? <div className="budget">Budget: ${movie.budget}</div> : ''}
          <div className="overview">{movie.overview}</div>
          <div className="links"></div>
        </div>
      </div>
    );
  }
}
