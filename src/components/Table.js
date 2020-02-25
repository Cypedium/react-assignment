import React, { Component } from 'react';

export default class Table extends Component {
    render() {
        const TableHeader = () => {
            return (
                <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Options</th>
                        <th></th>
                        
                    </tr>
                </thead>
            )
        }
        const TableBody = props => {
            const rows = props.carListProp.map((row, index) => {
                return (                    
                        <tr key={index}>
                            <td>{row.brand}</td>
                            <td>{row.model}</td>
                            <td>
                                <button onClick={() => props.removeCar(index)}>Delete</button>
                                {' '}
                                <button onClick={() => props.detailCar(index)}>Detail</button>
                            </td>                            
                        </tr>                    
                )
            });
            return <tbody>{rows}</tbody>
        }
        return (
            <table>
                <TableHeader />
                <TableBody  carListProp={this.props.carListProp} removeCar={this.props.removeCar} />
            </table>
        );
    }
}