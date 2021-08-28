import React from "react";
// import Card from "react-bootstrap/card";
import Container from "react-bootstrap/Container";
import WeatherDay from './WeatherDay';

class Weather extends React.Component {
  render() {
    return (
      <div>
        <Container>
          {this.props.weather.map(forcast => {
            return <WeatherDay day={forcast} />
          })
          } 
            {/* // <Card className="weatherCard">
            //   <Card.Text>{forcast.description}</Card.Text>
            //   <Card.Text>{forcast.date}</Card.Text>
            // </Card>          */}
        </Container>
      </div>
    );
  }
}
export default Weather;
