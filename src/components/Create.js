import React, { Component, Fragment } from 'react';

export default class Create extends Component {
      
        initialState = { //clear the form
          brand: '',
          model: '',
          year: '',
          price: ''
        }
    
        state = this.initialState
      
    handleChange = event => {
        const { name, value } = event.target;
        this.setState( { [name]: value } );
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }
    
    render() {
        const {brand, model, year, price, createNewCar} = this.state;
        const {handleChange, submitForm} = this;
        
        if (createNewCar)
        {
            return (
                    <Fragment>
                        <h2>Create New Car</h2>
                         <hr />              
                        <form>
                        <label for="">Brand</label>
                        <input type="text" name="brand" id="brand" value={brand} onChange={handleChange} />

                        <label for="">Model</label>
                        <input type="text" name="model" id="model" value={model} onChange={handleChange} />

                        <label for="">Year</label>
                        <input type="text" name="year" id="year" value={year} onChange={handleChange} />

                        <label for="">Price</label>
                        <input type="text" name="price" id="price" value={price} onChange={handleChange} />

                        <input type="button" value="Submit" onClick={submitForm} />
                        </form>
                    </Fragment>         
            );
        }
        return null;
    }
}