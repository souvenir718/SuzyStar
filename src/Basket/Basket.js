import React, { Component } from 'react';
import { Grid, Header, Card, Image, Button } from 'semantic-ui-react';
import "./Basket.css";

class Basket extends Component {
    getDataList() {
        let {products, baskets} = this.props;
        
        let dataList = products.map((data) => baskets.find(basket => data.id === basket) ?
        (
            <Card key={data.id} className="card-item">
              <Image src={data.imgUrl} wrapped ui={false} />
              <Card.Content>
                <Card.Header>Suzy</Card.Header>
                <Card.Meta>
                  <span>{data.pName}</span>
                  <br />
                  <span>{data.property}</span>
                </Card.Meta>
                <Card.Description>{data.price}</Card.Description>
              </Card.Content>
            </Card>
        ) : []
        );
        return dataList;
      }
    render() {
        let dataList = this.getDataList();
        return (
            <Grid.Row >
                <Grid.Column>
                    <div className="basket-container">
                <Header as="h1" className="basket-header">Basket</Header>
                <Button 
                onClick={()=>{
                  alert("구매에 성공하였습니다.")
                }}
                className="basket-button"
          content="Buy"
          labelPosition="right"
          icon="checkmark"
          positive
        />
                <hr></hr>
                <Card.Group itemsPerRow={4}>{dataList}</Card.Group>
                </div>
                </Grid.Column>
            </Grid.Row>
        );
    }
}

export default Basket;