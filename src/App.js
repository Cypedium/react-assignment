import React, {Component, Fragment} from 'react' ;
import Details from "./components/Details";
import Create from "./components/Create";
import List from "./components/List";
import Edit from "./components/Edit";

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
      ], createButtonClicked: false, details: true, showEditCar: false
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
        carListView: carList.filter((aCar) => {return aCar.Id ===Id} )
      });
    this.setState({details: false});
  }

  editCar = car => {
  const { carList } =this.state;
  this.setState(
      {
        carList: carList.append(car)
      }
    );
    this.setState({showEditCar: false})
  }

  showEditCar () {
    this.setState ({showEditCar: true})
  }

  sortList (sortRow) {
    const { carList} = this.state;
  
      switch (sortRow) {
        case "brand":
          this.setState ({carListSort: carList.sort(sortRow)});
        break;

        case "model":
          this.setState ({carListSort: carList.sort(sortRow)});
        break;

        case "year":         
        this.setState ({carListSort: carList.sort(sortRow)});
        break;

        case "price":         
        this.setState ({carListSort: carList.sort(sortRow)});
        break;
                  
        default:
        break;
      }
    }
  
  handleSubmit = car => {
      this.setState({ carList: [...this.state.carList, car] } );
      this.setState({createButtonClicked: false})
    }

  render() {
    const {createButtonClicked, details, showEditCar} = this.state;
    return (
      <Fragment>
        <table> {/* Head */}
          <tr>
            <td></td>
            <td>
              <h1>Handle Cars</h1>
              <button onClick={() => this.setState({createButtonClicked: true})}>Create new Car</button>            
            </td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>
              { details ? (
                <Fragment>
                  <h2>List of Cars</h2>
                  <List carList={this.state.carList} detailCar={this.detailCar} removeCar={this.removeCar} sortList={this.sortList} />
                </Fragment>
              ) : (
                <Fragment>
                  <h2>Details</h2>
                    <span>
                      <button onClick={() => this.setState({details: true})}> Back to List </button>
                    </span>
                  <Details 
                    carListView={this.state.carListView}
                    removeCar={this.removeCar}/>
                </Fragment>
              )
              }
            <br />
            </td>
            <td>
              { createButtonClicked ? (
                <Create handleSubmit={this.handleSubmit} />
              ) : showEditCar ? (
                <Edit editCar={this.editCar} />
              ) : (
                null
              )}
            </td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </Fragment>
    );
  }
}

export default App;