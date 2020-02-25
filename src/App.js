import React, {Component, Fragment} from 'react' ;
import Table from "./components/Table";
import Form from "./components/Form";

class App extends Component {
  state = {
      carList: 
      [
          {
              "brand": "Saab",
              "model": "9-5 Turbo",
              "year": "2005",
              "price": "5000 SEK"
          },
          {
              "brand": "Volvo",
              "model": "760",
              "year": "1994",
              "price": "3000 SEK"
          },
          {
              "brand": "BMW",
              "model": "525i",
              "year": "2001",
              "price": "11000 SEK"
          },
          {
              "brand": "Nissan",
              "model": "Leaf",
              "year": "2012",
              "price": "185 000 SEK"
          },
          {
              "brand": "Tesla",
              "model": "Model S",
              "year": "2019",
              "price": "1 995 000 SEK"
          }
      ]
  };

  removeCar = index => {
    const { carList } = this.state
    this.setState (
      {
        carList: carList.filter((car, i) => {return i !==index} )
      });
  }

  detailCar = index => {
    const { carList } = this.state
    this.setState (
      {
        carList
      });
  }

  handleSubmit = car => {
    this.setState( { carList: [...this.state.carList, car] } );
  }

  render() {
    return (
      <Fragment>
        <h1>Details</h1>
        <hr />
        <Table carListProp={this.state.carList} removeCar={this.removeCar} />
        <h1>Create</h1>
        <hr />
        <Form handleSubmit={this.handleSubmit} />
      </Fragment>
    );
  }
}

export default App;