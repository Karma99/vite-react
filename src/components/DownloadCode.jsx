import Card from 'react-bootstrap/Card';
import {getFileName, getFileExt} from '../utils/CommonFunctions';

const DownloadCode = (props) => {

    const fileName = getFileName(props.codeFilePath);
    const ext = getFileExt(fileName);
    return (
        <Card bg="light" border="light">
            <Card.Header className="text-center">
                <a className="btn btn-primary" href={props.codeFilePath} download={fileName}>{fileName.split('.')[0]} &#8595;</a>
            </Card.Header>
            {ext === 'txt' &&
                <Card.Body >
                    <iframe title="Clock" className="code-block" type="text/plain" src={props.codeFilePath} ></iframe>  
                </Card.Body>
            }
        </Card>
    );
}

export default DownloadCode;