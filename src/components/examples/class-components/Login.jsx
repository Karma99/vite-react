import React from 'react';
import ExampleBody from '../../../utils/ExampleBody';
import Button from 'react-bootstrap/Button';
import codeFilePath from "../../../uploads/class-components/Login.txt";


function LoginButton(props) {
    
    return ( <Button onClick={props.onClick} variant="success">Login</Button> );
}
  
function LogoutButton(props) {

    return ( <Button onClick={props.onClick} variant="danger">Logout</Button> );
}

export default class Login extends React.Component{

    constructor(props){
        super(props);

        this.state = {isLoggedIn : false}; 
    }
    
    handleLoginClick(t) {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick(t) {
        this.setState({isLoggedIn: false});
    }
    
    render(){
        return (
            <ExampleBody codeFilePath={codeFilePath}>
                {this.state.isLoggedIn 
                    ? <LogoutButton onClick={this.handleLogoutClick.bind(this, new Date().toLocaleTimeString())} /> 
                    : <LoginButton onClick={this.handleLoginClick.bind(this, new Date().toLocaleTimeString())} />
                }   
             </ExampleBody>            
        );
    }
}