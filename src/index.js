import React from 'react';
import ReactDOM from 'react-dom';
import SearchMovies from './searchMovies';
import './style.css';


class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 classMame="title">Kwik Cinema Search</h1>
        <SearchMovies/>
      </div>
    );
  }
}


ReactDOM.render(
  <Main />,
  document.getElementById('root')
);

