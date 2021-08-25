import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



class ExploreButton extends React.Component{
render(){
    return(
        <Form 
        onSubmit={(event) => this.props.getCity(event)}
        
        >
            <Form.Group 
                className="formOne" controlId="basicForm"
            >
                <Form.Label>Enter the city you want to see</Form.Label><br></br>
                <Form.Control type="city" placeholder="Enter city" onChange={(event) => this.props.updateSearch(event)} /> 
                {/* onCHange(event) will run for each Key Press in the text field and updateing state in app */}
            </Form.Group>
        <Button variant="primary" type="Explore">
            Explore!
        </Button>
        </Form>
    );
  }
}

export default ExploreButton
