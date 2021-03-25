import React, { Component, Fragment } from 'react';
import { Button , Card,CardImg, CardText, CardImgOverlay,Col, CardBody,CardTitle,CardSubtitle } from 'reactstrap';
import Checkout from './Checkout.js';

import SelectBox1 from './Select.js';

class Menu extends Component{
    constructor(props) {
        super(props);
           this.state={
             count:0
           }
        }

        
      
    render()
      {

        const addToBasket = () => {
          // dispatch the item into the data layer
          
          
        };

        
         const IncrementCount = () =>  {
          this.setState({
            count: this.state.count + 1
            
          });
          
        }

        const DecrementCount = () =>  {
          this.setState({
            
            count: this.state.count - 1
            
            
          });
          
        }

        


    const menu = this.props.dishes.map((dish) =>{
      
        return(
            <div key={dish.id} className="col-12 col-mt-5 m-1" >
              
            <Card>
            <div className="col">
            <CardBody align="center"> 
                <CardImg width="10%"  src={dish.image} alt={dish.name}  />
                
                <CardText>{dish.description}</CardText>
                <CardText>{dish.price}</CardText>
                <CardTitle>{dish.name}</CardTitle>
                <SelectBox1 />
                
                <Button onClick={addToBasket}>Add to Basket</Button>
                
                <Col>
                <Button onClick={IncrementCount}>+</Button>
                
                <Button onClick={DecrementCount}>-</Button>
                <h3>{this.state.count}</h3>
                </Col>
                  </CardBody>
                  </div>
            </Card>
                
            </div>
          );
    });

    return (
      <div className="container">
        <div className="row" background_color="primary">
          {menu}
          <div align="center">
          <Button variant="danger" size="lg">Checkout</Button></div>
        </div>
           
      </div>
    )

}
}
export default Menu;