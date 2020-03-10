import React, { Component, Fragment } from 'react';

export default class List extends Component {  
     
        render() {  
            const TableHeader = props => {
                return (
                        <tr>
                            <th>
                                <button onClick={() => props.sortBy('brand')}>Brand</button>
                            </th>
                            <th>
                                <button onClick={() => props.sortBy('model')}>Model</button>
                            </th>
                            <th>
                                <button onClick={() => props.sortBy('year')}>Year</button>
                            </th>
                            <th>
                                <button onClick={() => props.sortBy('price')}>Price</button>
                            </th> 
                            <th>Options</th>                     
                        </tr>
                );  
            }

            const TableBody = props => {
                const rows = props.carList.map((row) => {
                    return (                    
                            <tr key={"carId" + row.Id}>

                                <td>{row.brand}</td>
                                <td>{row.model}</td>
                                <td>{row.year}</td>
                                <td>{row.price}</td>
                                <td>
                                    <button onClick={() => props.detailCar(row.Id)}>Detail</button>
                                    {" "}
                                    <button onClick={() => props.removeCar(row.Id) }>Delete</button>
                                </td>                            
                            </tr>                    
                    )
                });
                return <tbody>{rows}</tbody>
            }
            return (
                <Fragment>
                    <TableHeader sortBy={this.props.sortBy} />
                    <TableBody  carList={this.props.carList} detailCar={this.props.detailCar} removeCar={this.props.removeCar} />
                </Fragment>
            );
        }
    
}