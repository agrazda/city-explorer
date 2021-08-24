import React from 'react';
import Form from 'react-bootstrap/Form';



class ExploreButton extends React.Component{
render(){
    return(
        <Form>
            <Form.Group className="formOne" controlId="basicForm">
                <Form.Label>Enter the city you want to see</Form.Label>
                <Form.Control type="city" placeholder="Enter city" />
            </Form.Group>
        <Button variant="primary" type="Explore">
            Explore!
        </Button>
        </Form>
    );
  }
}

export default ExploreButton
