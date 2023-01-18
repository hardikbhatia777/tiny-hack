import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function CardJS(props) {
  return (
    <Card style={{ width: '20rem', margin:'4rem'}}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          Reps and sets
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{props.cls}</ListGroup.Item>
        <ListGroup.Item>{props.author}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      
      </Card.Body>
    </Card>
  );
}

export default CardJS;