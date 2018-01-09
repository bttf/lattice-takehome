import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import MoviePanel from './components/MoviePanel';
import gql from 'graphql-tag';
import './App.scss';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      currentPage: 1,
      searchQuery: '',
    };

    this.searchMovies = this.searchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchPopularMovies();
  }

  fetchPopularMovies() {
    const page = this.state.currentPage;
    const query = gql`{
      popularMovies(page: ${page}) {
        id
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

    this.setState({
      movies: [],
      searchQuery: '',
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

    this.setState({
      movies: [],
      searchQuery: query,
    });

    this.props.client.query({ query: gqlQuery }).then(response => {
      const movies = response.data.movies;
      this.setState({ movies });
    });
  }

  render() {
    const searchQuery = this.state.searchQuery;

    return (
      <div className="application">
        <SearchBar searchMovies={this.searchMovies} />
        <div className="movies">
          <h1>
            {searchQuery.length ? `Movie results for '${searchQuery}':` : 'Popular Movies'}
          </h1>
          {this.state.movies.length ?
              this.state.movies.map((movie, index) =>
                (<MoviePanel key={movie.id} index={index} movie={movie} />)) : 'Loading'}
        </div>
      </div>
    );
  }
}
