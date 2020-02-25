import React, {Component} from 'react';

class Table extends Component {
    render() {
        const TableHeader = () => {
            return(
                <thead>
                    <tr>
                        <th></th>
                    </tr>
                </thead>
            )
        }
        const TableBody = () => {
            return(
                <tbody>
                    <tr>
                        <td></td>
                    </tr>
                </tbody>
            )
        }
        return (
            <div>
                <TableHeader></TableHeader>
                <TableBody></TableBody>
            </div>
        );
    }
}

export default Table;