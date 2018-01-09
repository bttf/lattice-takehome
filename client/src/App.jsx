import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import MoviePanel from './components/MoviePanel';
import MovieDetails from './components/MovieDetails';
import gql from 'graphql-tag';
import './App.scss';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      currentPage: 1,
      searchQuery: '',
      selectedMovie: null,
    };

    this.selectMovie = this.selectMovie.bind(this);
    this.searchMovies = this.searchMovies.bind(this);
    this.clearSelectedMovie = this.clearSelectedMovie.bind(this);
  }

  componentDidMount() {
    this.fetchPopularMovies();
  }

  fetchPopularMovies() {
    const page = this.state.currentPage;
    const query = gql`{
      popularMovies(page: ${page}) {
        id
        overview
        original_title
        poster_path
      }
    }`;

    this.setState({
      movies: [],
      searchQuery: '',
      selectedMovie: null,
    });

    this.props.client.query({ query }).then(response => {
      const movies = response.data.popularMovies;
      this.setState({ movies, searchQuery: '' });
    });
  }

  searchMovies(query) {
    if (!query.length) {
      return this.fetchPopularMovies();
    }

    const page = this.state.currentPage;
    const gqlQuery = gql`{
      movies(query: "${query}", page: ${page}) {
        id
        overview
        original_title
        poster_path
      }
    }`;

    this.setState({
      movies: [],
      searchQuery: query,
      selectedMovie: null,
    });

    this.props.client.query({ query: gqlQuery }).then(response => {
      const movies = response.data.movies;
      this.setState({ movies });
    });
  }

  selectMovie(selectedMovie) {
    this.setState({ selectedMovie });

    const gqlQuery = gql`{
      movie(id: ${selectedMovie.id}) {
        id
        backdrop_path
        budget
        homepage
        imdb_id
        overview
        original_title
        poster_path
        release_date
        runtime
        status
        tagline
        vote_average
        vote_count
      }
    }`;

    this.props.client.query({ query: gqlQuery }).then(response => {
      const movie = response.data.movie;
      this.setState({ selectedMovie: movie });
    });
  }

  clearSelectedMovie() {
    this.setState({ selectedMovie: null });
  }

  render() {
    const searchQuery = this.state.searchQuery;

    const moviesList = (
      <div className="movies">
        <h1>
          {this.state.selectedMovie ? 'selected' : ''}
          {searchQuery.length ? `Movie results for '${searchQuery}':` : 'Popular Movies'}
        </h1>
        {this.state.movies.length ?
            this.state.movies.map((movie, index) =>
              (<MoviePanel
                key={movie.id}
                index={index}
                movie={movie}
                selectMovie={this.selectMovie}
              />)) : 'Loading'}
      </div>
    );

    return (
      <div className="application">
        <SearchBar searchMovies={this.searchMovies} />
        {this.state.selectedMovie ?
            <MovieDetails
              movie={this.state.selectedMovie}
              clearSelectedMovie={this.clearSelectedMovie}
            /> : moviesList}
      </div>
    );
  }
}
