import React, { Component } from 'react';

export default class Form extends Component {
      
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
        const {brand, model, year, price} = this.state;
        return (
            <form>
              <label for="">Brand</label>
              <input type="text" name="brand" id="brand" value={brand} onChange={this.handleChange} />

              <label for="">Model</label>
              <input type="text" name="model" id="model" value={model} onChange={this.handleChange} />

              <label for="">Year</label>
              <input type="text" name="year" id="year" value={year} onChange={this.handleChange} />

              <label for="">Price</label>
              <input type="text" name="price" id="price" value={price} onChange={this.handleChange} />

              <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        );
    }
}