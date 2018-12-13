import React from "react";
import axios from "axios";
import { Card, Image, Grid, Segment, Rating, } from "semantic-ui-react";

class Item extends React.Component {
  state = { item: {}, reviews: [], };

  componentDidMount() {
    // axios.get(`/api/departments/${this.props.match.params.id}/items/${this.props.match.params.itemId}`)
    const { url, } = this.props.match;
    axios.get(`/api/${url}`)
      .then( res => this.setState({ item: res.data, }))
    axios.get(`/api/items/${this.props.match.params.itemId}/reviews`)
      .then( res => this.setState({ reviews: res.data, }))
  }

  renderReviews = () => {
    return this.state.reviews.map( r => (
      <Card fluid>
        <Card.Content>
          <Rating defaultRating={r.rating} maxRating={5} disabled icon="star" size="massive"/>
          <br />
          <br />
          <Card.Header>{ r.title }</Card.Header>
          <Card.Meta>{ r.author }</Card.Meta>
          <Card.Description>
            { r.body }
          </Card.Description>
        </Card.Content>
      </Card>
    ))
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
            <Segment>
              <h1 style={{ textAlign: "center" }}>Reviews</h1>
              <hr />
              { this.renderReviews() }
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Item;
