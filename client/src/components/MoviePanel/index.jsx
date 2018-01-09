import React, { PureComponent } from 'react';
import './styles.scss';

export default class MoviePanel extends PureComponent {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      if (!this.refs.panel) return;
      this.refs.panel.className = this.refs.panel.className.concat(' visible');
    }, 100 + (this.props.index * 100));
  }

  clickHandler() {
    this.props.selectMovie(this.props.movie);
  }

  render() {
    const posterPath =
      `https://image.tmdb.org/t/p/w500/${this.props.movie.poster_path}`;

    return (
      <div ref="panel" className="movie-panel" onClick={this.clickHandler}>
        <div className="poster">
          <img src={posterPath} alt="" />
        </div>
        <div className="info">
          <div className="title">
            {this.props.movie.original_title}
          </div>
          <div className="overview">
            {this.props.movie.overview}
          </div>
        </div>
      </div>
    );
  }
}
