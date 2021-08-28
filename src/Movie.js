import React from 'react';
import Card from 'react-bootstrap/Card';



class Movie extends React.Component {

  render() {
    return (
      <Card >
        <Card.Title>{this.props.movie.title}</Card.Title>
        <Card.Text>{this.props.movie.overview}</Card.Text>
        <Card.Footer>
          <Card.Text>{this.props.movie.release_date}</Card.Text>
        </Card.Footer>
      </Card>
    )
  }
}

export default Movie;