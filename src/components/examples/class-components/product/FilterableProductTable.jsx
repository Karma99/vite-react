import React from "react";
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import ExampleBody from '../../../../utils/ExampleBody';
     
export default class FilterableProductTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        filterText: '',
        inStockOnly: false
      };
      
      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
      this.handleInStockChange = this.handleInStockChange.bind(this);
    }
  
    handleFilterTextChange(filterText) {
      this.setState({
        filterText: filterText
      });
    }
    
    handleInStockChange(inStockOnly) {
      this.setState({
        inStockOnly: inStockOnly
      })
    }
  
    render() {    
      const codeFilePath =  new URL('/uploads/class-components/Search Product.zip', import.meta.url).href;
      
      return (
        <ExampleBody codeFilePath={codeFilePath}>
          <ProductTable
            products={this.props.products}
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
          />
          <br />
          <SearchBar
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
            onFilterTextChange={this.handleFilterTextChange}
            onInStockChange={this.handleInStockChange}
          />
        </ExampleBody>
      );
    }
 }