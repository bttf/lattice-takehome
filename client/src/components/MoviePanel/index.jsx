import React, { PureComponent } from 'react';

export default class MoviePanel extends PureComponent {
  render() {
    const posterPath = `https://image.tmdb.org/t/p/w500/${this.props.movie.poster_path}`;
    return (
      <div className="movie-panel">
        <img src={posterPath} alt="" />
        {this.props.movie.original_title}
      </div>
    );
  }
}
