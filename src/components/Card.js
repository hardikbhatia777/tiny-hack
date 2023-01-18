import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function CardJS(props) {
  return (
    <Card style={{ width: '40rem', margin:'8rem'}}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text} 
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{props.desc}</ListGroup.Item>
        <ListGroup.Item>{props.author}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Button variant="dark" href="#">View More</Button>
      <button class="bg-pink-500 text-white active:bg-pink-600 h-12 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
      >
      <i class="fas fa-heart"></i>
      </button>
      </Card.Body>
    </Card>
  );
}

export default CardJS;