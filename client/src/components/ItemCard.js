import React from "react";
import { Link, } from "react-router-dom";
import { Card, Image, Button, } from "semantic-ui-react";

const ItemCard = ({ id, name, description, price, image_url, remove, department_id }) => (
  <Card>
    <Image src={image_url} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <br />
      <Card.Content extra>${price}</Card.Content>
      <br />
      <Card.Description>{description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div className="ui three buttons">
        <Link to={`/departments/${department_id}/items/${id}`}>
          <Button inverted color="blue">
            Show
          </Button>
        </Link>
        <Link to={`/departments/${department_id}/items/${id}/edit`}>
          <Button inverted color="orange">
            Edit
          </Button>
        </Link>
        <Button inverted color="red" onClick={() => remove(id)}>
          Delete
        </Button>
      </div>
    </Card.Content>
  </Card>
)

export default ItemCard;
