import React, { Component } from 'react';
import MoviePanel from './components/MoviePanel';
import gql from 'graphql-tag';
import './App.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchPopularMovies();
  }

  fetchPopularMovies(page = 1) {
    const query = gql`{
      popularMovies(page: 1) {
        backdrop_path
        budget
        homepage
        overview
        original_title
        poster_path
        vote_average
        vote_count
      }
    }`;

    this.props.client.query({ query }).then(response => {
      const movies = response.data.popularMovies;
      this.setState({ movies });
    });
  }

  render() {
    return (
      <div className="application">
        <div className="search-bar">
          <input type="text" />
        </div>
        <div className="movies">
          {this.state.movies.length ?
              this.state.movies.map((movie, index) =>
                (<MoviePanel key={movie.id} index={index} movie={movie} />)) : 'Loading'}
        </div>
      </div>
    );
  }
}
