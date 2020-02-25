import React, {Component, Fragment} from 'react' ;
import Table from ".components/Table";


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

  render() {
    return (
      <Fragment>
        <Table characterData={this.carList}></Table>
      </Fragment>
    );
  }
}

export default App;