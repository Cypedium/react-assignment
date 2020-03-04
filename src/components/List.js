import React, { Component, Fragment } from 'react';

export default class List extends Component {
        
     
        render() {  
            const TableHeader = props => {
                return (
                    <thead>
                        <tr>
                            <th>
                                <button onClick={() => props.sortList(props.carList.row.brand)}>Brand</button>
                            </th>
                            <th>
                                <button onClick={() => props.sortList(props.carList.row.model)}>Model</button>
                            </th>
                            <th>
                                <button onClick={() => props.sortList(props.carList.row.year)}>Year</button>
                            </th> 
                            <th>Options</th>                     
                        </tr>
                    </thead>
                );  
            }

            const TableBody = props => {
                const rows = props.carList.map((row) => {
                    return (                    
                            <tr key={"carId" + row.Id}>

                                <td>{row.brand}</td>
                                <td>{row.model}</td>
                                <td>{row.year}</td>
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
                    <TableHeader carList={this.props.carList} sortList={this.props.sortList} />
                    <TableBody  carList={this.props.carList} detailCar={this.props.detailCar} removeCar={this.props.removeCar} />
                </Fragment>
            );
        }
    
}