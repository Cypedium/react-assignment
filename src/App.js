import React, {Component, Fragment} from 'react' ;
import Details from "./components/Details";
import Create from "./components/Create";
import List from "./components/List";

class App extends Component {
  state = {
      carList: 
      [
          {
              "Id": "1",
              "brand": "Saab",
              "model": "9-5 Turbo",
              "year": "2005",
              "price": "5000 SEK"
          },
          {
              "Id": "2",
              "brand": "Volvo",
              "model": "760",
              "year": "1994",
              "price": "3000 SEK"
          },
          {
              "Id": "3",
              "brand": "BMW",
              "model": "525i",
              "year": "2001",
              "price": "11000 SEK"
          },
          {
              "Id": "4",
              "brand": "Nissan",
              "model": "Leaf",
              "year": "2012",
              "price": "185 000 SEK"
          },
          {
              "Id": "5",
              "brand": "Tesla",
              "model": "Model S",
              "year": "2019",
              "price": "1 995 000 SEK"
          }
      ], createNewCar: false
  };

  

  removeCar = Id => {
    const { carList } = this.state;
    this.setState (
      {
        carList: carList.filter((aCar) => {return aCar.Id !==Id} )
      });
  }

detailCar = Id => {
  const { carList } = this.state;
  this.setState (
    {
      carList: carList.filter((aCar) => {return aCar.Id ===Id} )
    });
}

handleEnableCreateCar () {
  this.setState({createNewCar: true});
  return(
    <Create
    handleSubmit={this.handleSubmit} 
    handleDisableCreateCar={this.handleDisableCreateCar}
    />
  );
}
handleDisableCreateCar(){
  this.setState({createNewCar: false})
}

handleSubmit = car => {
    this.setState( { carList: [...this.state.carList, car] } );
  }

  render() {
    return (
      <Fragment>
        <h1>List of Cars</h1>
        <button onClick={this.handleEnableCreateCar()}> Create </button>                 
        <List
          carList={this.state.carList} 
          detailCar={this.detailCar}
          />
        <table>
          <tr>
            <td></td>
            <td>
            <h2>Details</h2>
              <hr />
              <Details 
                carList={this.state.carList}
                removeCar={this.removeCar}
              />
            </td>
            <td></td>
            <td>
            </td>
            <td></td> 
          </tr>
        </table>       
      </Fragment>
    );
  }
}

export default App;