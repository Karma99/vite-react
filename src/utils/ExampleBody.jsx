import Card from 'react-bootstrap/Card';
import DownloadCode from '../components/DownloadCode';

export default function ExampleBody(props){

    return (
        <div className="my-4">
            <Card className={props.className}>
                <Card.Body>
                    {props.children}
                </Card.Body>
            </Card>
            <DownloadCode codeFilePath={props.codeFilePath} />
        </div>
    );
}