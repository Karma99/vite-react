
import Button from 'react-bootstrap/Button';
import ExampleBody from '../../../utils/ExampleBody';
import {useTheme, PAGE_THEMES} from '../../../utils/ThemeProvider';

export default function Theme(){

    const codeFilePath =  new URL('../../../uploads/hooks/Theme.zip', import.meta.url).href;
    
    const {setTheme}   = useTheme();
    const clickHandler = (newTheme) => setTheme(newTheme);
   
    return (
        <ExampleBody codeFilePath={codeFilePath}>
            <Button variant="outline-primary"   className="me-3" onClick={() => clickHandler(PAGE_THEMES.primary)}> Blue </Button>
            <Button variant="outline-secondary" className="me-3" onClick={() => clickHandler(PAGE_THEMES.light)}> Light </Button>
            <Button variant="outline-dark"      onClick={() => clickHandler(PAGE_THEMES.dark)}> Dark </Button>
        </ExampleBody>
    );
}