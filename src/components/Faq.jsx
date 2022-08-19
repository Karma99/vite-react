import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

export default function Faq(props){

    return (
        <Container className="mb-5">
            <Card>
                <Card.Header className="text-center">#FAQ ?</Card.Header>
                <Card.Body>
                {
                    props.faqList.map((item, index) => {
                
                        return(
                            <Accordion flush key={'query-' + index}>
                                <Accordion.Item eventKey={index}>
                                    <Accordion.Header>{ `#${index + 1} ` + item.title}</Accordion.Header>
                                    <Accordion.Body >
                                        <code className="text-muted">{item.summary} </code>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        );
                    })    
                }
                </Card.Body>
            </Card>
        </Container>
    );
}