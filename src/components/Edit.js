import React, { Component, Fragment } from 'react';

export default class Edit extends Component {
      
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
        this.props.handleSubmitEdit(this.state);
        console.log("asdf" + this.props);
        this.setState(this.initialState);
    }
    
    render() {
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