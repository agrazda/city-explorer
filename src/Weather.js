import  React from 'react'
import { Container, Card } from 'react-bootstrap'

class Weather extends React.Component {
    render(){
        return(
            <Container> 
                {this.props.weather.map(forcast => 
                <Card style= {{ backgroundColor: 'blue'}}>
                    <Card.Text>{forcast.description}</Card.Text>
                    <Card.Text>{forcast.date}</Card.Text>
                </Card>
                )}
            </Container>
        )
    }
}
export default Weather
