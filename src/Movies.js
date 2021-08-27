import React from "react";
import { Container, Card } from "react-bootstrap";

class Movies extends React.Component {
  render() {
    return (
      <div>
        <Container>
          {this.props.movie.map((movie) => (
            <Card className="movieCard">
              <Card.Text>{movie.title}</Card.Text>
            </Card>
          ))}
        </Container>
      </div>
    );
  }
}
export default Movies;
