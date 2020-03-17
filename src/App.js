import React, {Component, Fragment} from 'react' ;
import Details from "./components/Details";
import Create from "./components/Create";
import List from "./components/List";
import Edit from "./components/Edit";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  
  state = { 
      counters: [
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 }
      ],
      carList: [
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
              "model": "300",
              "year": "2012",
              "price": "185000 SEK"
          },
          {
              "Id": "5",
              "brand": "Tesla",
              "model": "1000",
              "year": "2019",
              "price": "1995000 SEK"
          }
      ], createButtonClicked: false, editButtonClicked: false, details: true, showEditCar: false, toggleSort: true, oldColumn: ""
      
  };

  //-----SHOPPING CART--------------------------------------------------------------------------------------------------------------------------------
  constructor(props) {
    super(props);
    console.log("App - Constructor"); /*need to passing throw props*/
    // this.state = this.props.api;
   };
   
   componentDidMount() {
     console.log("App - Mounted");
     // Ajax Call
     //this.setState({api})
   }
   
     handleIncrement = counter => {
       const counters = [...this.state.counters]; /*clone the state*/
       const index = counters.indexOf(counter);
       counters[index]={...counter};
       counters[index].value++;
       this.setState({ counters });
   };

   handleDecrement = counter => {
    const counters = [...this.state.counters]; /*clone the state*/
    const index = counters.indexOf(counter);
    counters[index]={...counter};
    if (counters[index].value > 0)
    {
      counters[index].value--;
      this.setState({ counters });
    }
};
   
     handleReset = () => {
       const counters = this.state.counters.map( c => { /*this creates an array*/ 
         c.value = 0;
         return c;
       });
       this.setState({ counters });
     };
   
     handleDelete = (counterId) => {
      const counters = this.state.counters.filter(c => c.id !== counterId);
      this.setState({ counters: counters }) /*override property with constant*/
     };
//-----------------------------------------------------------------------------------------------------------------

//------MANAGE CAR-------------------------------------------------------------------------------------------------
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

  /* editCar = car => {
  const { carList } =this.state;
  this.setState(
      {
        carList: carList.append(car)
      }
    );
    this.setState({showEditCar: false})
  } */

  editCar = aCar => {
    this.setState({editButtonClicked: true});
    
    return (<Edit handleSubmitEdit={() => this.handleSubmitEdit(aCar)} />)
  }


  handleSubmitCreate = car => {
    this.setState({ carList: [...this.state.carList, car] } );
    this.setState({createButtonClicked: false})
  }

  handleSubmitEdit = car => {
    this.setState({ carList: [...this.state.carList, car] } );
    this.setState({editButtonClicked: false})
  }

  sortByString = (column) => { /* use arrowfunction to binds this */
    const { carList, toggleSort, oldColumn } = this.state; 
          this.setState ({           
            carList: carList.sort( (a, b) => (
               toggleSort === true             
              ? ((a[column].toLowerCase() < b[column].toLowerCase()) || column !== oldColumn)
                  ? -1
                : ((a[column].toLowerCase() > b[column].toLowerCase()) || column !== oldColumn)
                  ? 1
                : 0
              :
                ((a[column].toLowerCase() > b[column].toLowerCase()) || column !== oldColumn)
                  ? -1
                : ((a[column].toLowerCase() < b[column].toLowerCase()) || column !== oldColumn)
                  ? 1
                : 0
            )),            
            toggleSort: 
            toggleSort === true
              ? false
              : true,
            oldColumn: column           
    })
  }

  sortByInt = (column) => { /* use arrowfunction to binds this */
    const { carList, toggleSort, oldColumn } = this.state; 
          this.setState ({           
            carList: carList.sort( (a, b) => (
              toggleSort === true || column !== oldColumn
                ? parseFloat(a[column]) - parseFloat(b[column])
                : parseFloat(b[column]) - parseFloat(a[column])
            )),            
            toggleSort: 
            toggleSort === true
              ? false
              : true,
            oldColumn: column           
    })
  }
//----------------------------------------------------------------------------------------------------------------------

  render() {
    console.log("App - Rendered");

    const {createButtonClicked, details, editButtonClicked, counters} = this.state;
    return (
      <Fragment>
        <NavBar
          totalCounters={counters.filter(c => c.value > 0).length} /*only display values greater than zero*/
        />
        <main className="container">
          <Counters
            counters={counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
        <table> {/* Head */}
          <tr>
            <td></td>
            <td>
              <h1>Handle Cars</h1>
              <button className="btn btn-info" onClick={() => this.setState({createButtonClicked: true})}>Create new Car</button>            
            </td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>
              { details ? (
                <Fragment>
                  <h2>List of Cars</h2>
                  <List 
                  carList={this.state.carList} detailCar={this.detailCar} removeCar={this.removeCar} sortByInt={this.sortByInt} sortByString={this.sortByString} />
                </Fragment>
                ) : (
                <Fragment>
                  <h2>Details</h2>
                    <span>
                      <button onClick={() => this.setState({details: true})}> Back to List </button>
                    </span>
                  <Details 
                    carListView={this.state.carListView}
                    removeCar={this.removeCar}
                    editCar={this.editCar} />
                </Fragment>
                )
              }
            <br />
            </td>
            <td>
              { createButtonClicked
                ? ( 
                    <Create handleSubmitCreate={this.handleSubmitCreate} />
                  )
                : editButtonClicked 
                ? (
                    <Edit handleSubmitEdit={this.handleSubmitEdit} />
                  )
                : ( null )
              }
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