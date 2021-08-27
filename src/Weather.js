import React from "react";
import { Container, Card } from "react-bootstrap";

class Weather extends React.Component {
  render() {
    return (
      <div>
        <Container>
          {this.props.weather.map((forcast) => (
            <Card className="weatherCard">
              <Card.Text>{forcast.description}</Card.Text>
              <Card.Text>{forcast.date}</Card.Text>
            </Card>
          ))}
        </Container>
      </div>
    );
  }
}
export default Weather;
