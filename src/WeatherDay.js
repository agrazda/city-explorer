import React from 'react';
import Card from 'react-bootstrap/Card';


class WeatherDay extends React.Component {

  render() {
    return (
      <Card >
        <Card.Title>Date: {this.props.day.date}</Card.Title>
        <Card.Text>Todays temp. {this.props.day.description} </Card.Text>
      </Card>
    )
  }
}

export default WeatherDay;