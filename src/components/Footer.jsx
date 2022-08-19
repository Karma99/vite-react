import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useTheme} from '../utils/ThemeProvider';

export default function Footer()
{
    const theme = useTheme();
    const year  = new Date().getFullYear();     
    
    return (
        <footer className={theme.pageTheme.footer}>
            <Container>
                <Row className="text-center">
                    <Col>
                        <small >No Copyright &copy; It's <strong>{year}</strong></small>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}