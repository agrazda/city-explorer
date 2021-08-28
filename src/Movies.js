import React from "react";
import Container from "react-bootstrap/Container";
import Movie from './Movie';

class Movies extends React.Component {
  render() {
    return (
      <div>
        <Container>
          {this.props.movie.map(movie => {
            return <Movie movie={movie}/>
            })         
          }
        </Container>
      </div>
    );
  }
}

export default Movies;
