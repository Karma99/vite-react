import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import ExampleBody from '../../../utils/ExampleBody';

// Using Controlled Components Technique (Except file)
export default class FormExample extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            productPic: "",
            productName:"",
            categoryName: "",
            quantity: 0,
            price:0.00,
            productVariation: [],
            description:"",
            termsCondition: false,
            status: "1"
        };

        this.productPicRef = React.createRef();

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleInputChange(event) {
        
        // Destructuring assignment
        const {name, value, type, checked, selectedOptions}  = event.target;
        
        let val;

        if(type === 'checkbox')
            val = checked;
        else if(type === 'select-multiple')
            val = Array.from(selectedOptions, option => option.value);
        else if(type === 'file')
            val = this.productPicRef.current.value;  // File Name with Path 
        else
            val = value;
      
        // Computed property names   
        this.setState({
            [name]: val    
        });
    }
    
    handleSubmit(event) {
        event.preventDefault();
 
        const formData = `
            Category:       ${this.state.categoryName}
            Product:        ${this.state.productName}
            Variation:      ${this.state.productVariation}
            Quantity:       ${this.state.quantity}
            Price:          ${this.state.price}
            Description:    ${this.state.description}
            Product Picture:     ${ (this.state.productPic) ? this.productPicRef.current.files[0].name : ""}
            Terms and Condition: ${this.state.termsCondition}
            Status:              ${this.state.status}
        `;

        alert(formData);
    }
    
    render(){

        const codeFilePath = "../../../src/uploads/class-components/Form.txt";

        return (
            <ExampleBody codeFilePath={codeFilePath}>
                 
                <Form name="react-form" onSubmit={this.handleSubmit}>
                    
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="categoryName">
                            <Form.Label>Select Category:</Form.Label>
                            <Form.Select name="categoryName" size="md" value={this.state.categoryName} onChange={this.handleInputChange}>
                                <option value="">       Please Select</option>            
                                <option value="watch">  Watch</option>
                                <option value="shoe">   Shoe</option>
                                <option value="shirt">  Shirt</option>
                                <option value="mobile"> Mobile</option>
                            </Form.Select>     
                        </Form.Group>

                        <Form.Group as={Col} controlId="productName">
                            <Form.Label>Product Name:</Form.Label>
                            <Form.Control type="text" name="productName" checked={this.state.productName} onChange={this.handleInputChange} />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="productVariation">
                        <Form.Label>Select Variation:</Form.Label>
                        <Form.Select name="productVariation" multiple={true} value={this.state.productVariation} onChange={this.handleInputChange}>
                            {this.props.productOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </Form.Select>     
                    </Form.Group>
                    
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="quantity">
                            <Form.Label>Quantity:</Form.Label>
                            <Form.Control type="number" name="quantity" checked={this.state.quantity} onChange={this.handleInputChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="price">
                            <Form.Label>Price:</Form.Label>
                            <InputGroup>
                                <InputGroup.Text>&#8377;</InputGroup.Text>
                                <Form.Control type="text" name="price" checked={this.state.price} onChange={this.handleInputChange} />
                            </InputGroup>
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Description:</Form.Label>
                        <Form.Control as="textarea" rows={6} name="description" value={this.state.description} onChange={this.handleInputChange}/>     
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="productPic">
                        <Form.Label>Product Picture:</Form.Label>
                        <Form.Control type="file" name="productPic" ref={this.productPicRef} onChange={this.handleInputChange} />
                    </Form.Group>
         
                    <Form.Group className="mb-3" controlId="termsCondition">
                        <Form.Check type="checkbox" name="termsCondition" id="termsCondition" label="Terms and Condition" checked={this.state.termsCondition} onChange={this.handleInputChange} />
                    </Form.Group>
                                
                    <Form.Group className="mb-3" controlId="status">
                        <Form.Label className="me-3">Status:</Form.Label>
                        <Form.Check type="radio" name="status" label="Active"  inline  value="1" checked={this.state.status === "1"} onChange={this.handleInputChange} />
                        <Form.Check type="radio" name="status" label="In-active" inline value="0" checked={this.state.status === "0"} onChange={this.handleInputChange} />
                    </Form.Group>                
                    
                    <Button variant="dark" type="submit">Submit</Button>
                    
                </Form>
            </ExampleBody>
        );
    }
}