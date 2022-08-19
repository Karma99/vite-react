import { Link } from 'react-router-dom';

import logo from '../assets/images/logo.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import {useTheme} from '../utils/ThemeProvider';

export default function HeaderMenu(props){
    
    const theme = useTheme();

    return (
        <header>
            <Navbar bg={theme.pageTheme.header.bg} variant={theme.pageTheme.header.variant} expand="lg" fixed="top" >
                <Container>
                    <Link to="/" className="navbar-brand">
                        <Image className="App-logo" src={logo} alt="..." width="50" height="50" /> 
                        React Js Learner
                    </Link>
                    <Navbar.Toggle aria-controls="react-learner-nav" />
                    <Navbar.Collapse id="react-learner-nav">
                        <Nav className="me-auto">    
                        {
                            props.menuItems.map((item, index) => {
                                
                                if(item.submenu.length > 0){
                                                            
                                    let submenu = [];
    
                                    return (
                                        <NavDropdown title={item.name} key={'menu-' + index} id={ `react-learner-dropdown-${index}`}>
                                            { 
                                                item.submenu.forEach((subItem, subIndex) => {
                                                
                                                    if(subItem.divider){
                                                        submenu.push(<NavDropdown.Divider key={'divider-'+ index + '-' + subIndex} />);
                                                    }

                                                    submenu.push(
                                                        /* No Page Redirection : SPA 
                                                            [use render prop: "as" to convert to react-router-dom -> Link]
                                                        */
                                                        <NavDropdown.Item
                                                            as={Link} 
                                                            className="dropdown-item" 
                                                            to={item.link + '/' +subItem.link} 
                                                            key={'submenu-'+ index + '-' + subIndex}
                                                            data-rr-ui-dropdown-item=""
                                                        > 
                                                            {subItem.name} 
                                                        </NavDropdown.Item>
                                                    );
                                                })
                                            }
                                            
                                            {submenu}
                                        
                                        </NavDropdown>
                                    );
                                }
                                else{
                                    
                                    return ( 
                                        <NavDropdown.Item
                                            as={Link}  
                                            className="nav-link" 
                                            to={item.link} 
                                            key={'menu-' + index}
                                            data-rr-ui-event-key="/"
                                        > 
                                            {item.name} 
                                        </NavDropdown.Item>
                                    );
                                }
                            })
                        }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>                        
        </header>
    );
}