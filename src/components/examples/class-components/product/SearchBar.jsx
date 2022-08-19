import React from "react";
import Form from "react-bootstrap/Form";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }
  
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  
  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked);
  }
    
  render() {
    return (
      <Form >
        <Form.Control 
          type="text" 
          name="search" 
          placeholder="Search..." 
          value={this.props.filterText}
          onChange={this.handleFilterTextChange} 
        />
        <br />
        <Form.Check 
          type="checkbox" 
          name="inStock" 
          label=" Only show products in stock" 
          checked={this.props.inStockOnly}
          onChange={this.handleInStockChange} 
        />
      </Form>
    );
  }
}