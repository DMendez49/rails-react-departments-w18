import React from "react";
import axios from "axios";
import { Card, Icon, Button, } from "semantic-ui-react";

class Department extends React.Component {
  state = { dep: {}, };

  componentDidMount() {
    const { id, } = this.props.match.params;
    axios.get(`/api/departments/${id}`)
      .then( res => this.setState({ dep: res.data, }))
  }

  handleDelete = (id) => {
    const remove = window.confirm("Are you sure you want to delete this department?")
    if (remove)
      axios.delete(`/api/departments/${id}`)
        .then( res => this.props.history.push("/departments"))
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
      </div>
    )
  }
}

export default Department;
