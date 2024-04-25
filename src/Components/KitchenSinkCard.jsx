import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import CardCSS from '../Styling/card.module.css';

function KitchenSinkCard({ imageSrc }) {
  return (
    <Card class={CardCSS.cardbox}>
      <Card.Img variant="top" src={imageSrc} className={CardCSS.Image} />
      <Card.Body>
        <Card.Title style={{fontSize: '40px', marginLeft: '20px', fontFamily: 'Poppins'}}>Card Title</Card.Title>
        <br />
        <Card.Text className={CardCSS.desc}>
          Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sit, maiores accusamus, repellat mollitia accusantium libero iste fuga fugit nostrum facilis, necessitatibus distinctio sunt illo impedit laudantium praesentium odit in suscipit placeat.
        </Card.Text>
        <br /><br />
      </Card.Body>
      <ListGroup className={`list-group-flush ${CardCSS.data}`}>
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <br />
        <Card.Link class={CardCSS.link} href="#">Card Link</Card.Link>
        <Card.Link class={CardCSS.link} href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default KitchenSinkCard;