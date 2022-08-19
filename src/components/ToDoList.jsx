import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import {generateList} from '../utils/CommonFunctions';

export default function ToDoList(props){
    
  return (
    <section id="todoList">
      <Container className="my-5">
        <Row xs={1} md={3} className="g-4">
            {
              props.toDoList.map((item, index) => {
              
                return (
                  <Col key={'col-' + index}>
                    <Card key={'todo-' + index} border={item.border} className="m-2">
                      <Card.Header>{item.header}</Card.Header>
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <div className="p-2">
                          { (item.text.length === 1) ? item.text[1] : generateList(item.text) }
                        </div>
                        <a className="p-2" href={item.link} target="_blank" rel='noreferrer'>{item.linkName}</a>
                      </Card.Body>
                      <Card.Footer className="text-muted">{ `TimeLine : ${item.timeline}` }</Card.Footer>
                    </Card>
                  </Col>
                );
              })
            }
        </Row>
      </Container>
    </section>
  );
}