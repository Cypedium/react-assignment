import React, { Component, Fragment } from 'react';

export default class Edit extends Component {
    
    state = this.initialState;

    initialState = {
        brand: '',
        model: '',
        year: '',
        price: ''
    }
    
    getStateFromCar = () => {
        const { carListEdit } = this.props;
                this.setState( { brand: carListEdit[0].brand } );
                this.setState( { model: carListEdit[0].model } );
                this.setState( { year:  carListEdit[0].year  } );
                this.setState( { price: carListEdit[0].price } );
    }
    

    handleChange = event => {
        const { name, value } = event.target;
        this.setState( { [name]: value } );
    }

    submitForm = () => {
        this.props.handleSubmitEdit(this.state);
        this.setState(this.initialState);
    }

    /* Use this function to debug my code */

    componentDidMount = () => {
    }


    render() {
        this.getStateFromCar();
        const {brand, model, year, price} = this.state;
        const {handleChange, submitForm} = this;
           
            return (
                    <Fragment>
                        <h2>Edit Car</h2>              
                        <form className="from-group">
                            <label for="">Brand</label>
                            <input type="text" name="brand" id="brand" value={brand} onChange={handleChange} />
                            <br />
                            <label for="">Model</label>
                            <input type="text" name="model" id="model" value={model} onChange={handleChange} />
                            <br />
                            <label for="">Year</label>
                            <input type="text" name="year" id="year" value={year} onChange={handleChange} />
                            <br />
                            <label for="">Price</label>
                            <input type="text" name="price" id="price" value={price} onChange={handleChange} />
                            <br />
                            <input className="btn btn-primary" type="button" value="Submit" onClick={submitForm} />                          
                        </form>
                    </Fragment>         
            );
    }
}