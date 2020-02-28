import React, { Component, Fragment } from 'react';

export default class List extends Component {
        
     
        render() {
            
            const TableHeader = () => {
                return (
                    <thead>
                        <tr>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>Year</th>                      
                        </tr>
                    </thead>
                )
            }
            const TableBody = props => {
                const rows = props.carList.map((row) => {
                    return (                    
                            <tr key={"carId" + row.Id}>
                                <td>{row.brand}</td>
                                <td>{row.model}</td>
                                <td>{row.year}</td>
                                <td>
                                    <button onClick={ () => props.detailCar(row.Id) }>Detail</button>
                                </td>                            
                            </tr>                    
                    )
                });
                return <tbody>{rows}</tbody>
            }
            return (
                <Fragment>
                    <TableHeader />
                    <TableBody  carList={this.props.carList} detailCar={this.props.detailCar}/>
                </Fragment>
            );
        }
    
}