import React from "react";
import axios from "axios";
import { Link, } from "react-router-dom";
import { Card, Icon, Button, Image, } from "semantic-ui-react";

class Department extends React.Component {
  state = { dep: {}, items: [], };

  componentDidMount() {
    const { id, } = this.props.match.params;
    axios.get(`/api/departments/${id}`)
      .then( res => this.setState({ dep: res.data, }))
    axios.get(`/api/departments/${id}/items`)
      .then( res => this.setState({ items: res.data, }))
  }

  handleDelete = (id) => {
    const remove = window.confirm("Are you sure you want to delete this department?")
    if (remove)
      axios.delete(`/api/departments/${id}`)
        .then( res => this.props.history.push("/departments"))
  }

  renderItems = () => {
    return this.state.items.map( i => (
      <Card>
        <Image src={i.image_url} />
        <Card.Content>
          <Card.Header>{ i.name }</Card.Header>
          <br />
          <Card.Content extra>${ i.price }</Card.Content>
          <br />
          <Card.Description>{ i.description }</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button inverted color="blue">
              Edit
            </Button>
            <Button inverted color="red">
              Delete
            </Button>
          </div>
        </Card.Content>
      </Card>
    ))
  }

  render() {
    const { dep: { id, name, description, }, } = this.state;
    
    return (
      <div>
        <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
          <h1>{ name }</h1>
          <div>
            <Button icon color="blue">
              <Icon name="pencil" />
              Edit
            </Button>
            <Button icon color="red" onClick={() => this.handleDelete(id)}>
              <Icon name="trash" />
              Delete
            </Button>
          </div>
        </div>
        <br />
        <h4>{ description }</h4>
        <br />
        <br />
        <Link to={`/departments/${id}/items/new`}>
          <Button icon color="green">
            <Icon name="add" />
            Add Item
          </Button>
        </Link>
        <br />
        <br />
        <Card.Group>
          { this.renderItems() }
        </Card.Group>
      </div>
    )
  }
}

export default Department;
