import React from "react";
import axios from "axios";
import { Card, Image, Grid, } from "semantic-ui-react";

class Item extends React.Component {
  state = { item: {}, reviews: [], };

  componentDidMount() {
    // axios.get(`/api/departments/${this.props.match.params.id}/items/${this.props.match.params.itemId}`)
    const { url, } = this.props.match;
    axios.get(`/api/${url}`)
      .then( res => this.setState({ item: res.data, }))
  }

  render() {
    const { name, description, price, image_url, } = this.state.item;

    return (
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
            <Card>
              <Image src={image_url} />
              <Card.Content>
                <Card.Header>{name}</Card.Header>
                <br />
                <Card.Content extra>${price}</Card.Content>
                <br />
                <Card.Description>{description}</Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <div>
              <h1>Reviews</h1>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Item;
