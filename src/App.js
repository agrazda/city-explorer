import "./App.css";
import React from "react";
import axios from "axios";
import ExploreButton from "./ExploreButton";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      citySearch: "",
      city: {},
    };
  }

  getCity = async (event) => {
    event.preventDefault();
    const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.citySearch}&format=json`;

    try {
      const response = await axios.get(API);
      this.setState({
        city: response.data[0],
        alert: "",
      });
    } catch (error) {
      this.setState({ alert: `${error}` });
    }
  };

  updateSearch = (event) => {
    this.setState({ citySearch: event.target.value });
    //Function is used for the form - When form is used it will update state(updating the actual city the customer is searching for)
  };

  render() {
    return (
      <div>
        <header>City Explorer</header>
        <ExploreButton
          updateSearch={this.updateSearch}
          getCity={this.getCity}
        />
        {this.state.alert ? (
          <Alert
            variant={"danger"}
            style={{
              margin: "0px 0px 20px 30px",
              width: "60%",
            }}
          >
            <Alert.Heading>{this.state.alert}</Alert.Heading>
            <hr />
            <p> That is not a valid location. Please enter valid location</p>
          </Alert>
        ) : (
          this.state.city.place_id && (
            <Card
              className="customCard"
              style={{ width: "700px", height: "700px" }}
            >
              <Card.Body>
                <Card.Title>
                  <h2>The city is: {this.state.city.display_name}</h2>
                </Card.Title>
                <Card.Text>
                  {/* <h2>The city is: {this.state.city.display_name}</h2> */}
                  <h3>The Latitude is: {this.state.city.lat}</h3>
                  <h3>The Latitude is: {this.state.city.lon}</h3>
                </Card.Text>
                <img
                  style={{ width: 450 }}
                  alt="map"
                  variant="top"
                  src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.state.city.lat},${this.state.city.lon}&zoom=12`}
                />
              </Card.Body>
            </Card>
          )
        )}
      </div>
    );
  }
}

export default App;
