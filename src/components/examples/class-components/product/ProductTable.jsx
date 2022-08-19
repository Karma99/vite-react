import React from "react";
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
import Table from 'react-bootstrap/Table';

export default class ProductTable extends React.Component {
    
    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;
    
        const rows = [];
        let lastCategory = null;
    
        this.props.products.forEach((product) => {
            if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
                return;
            }
            if (inStockOnly && !product.stocked) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(
                    <ProductCategoryRow category={product.category} key={product.category} />
                );
            }
            rows.push(
                <ProductRow product={product} key={product.name} />
            );
            lastCategory = product.category;
        });
    
        return (
            <Table responsive bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        );
    }
}