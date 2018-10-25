import React, { Component } from 'react';
import Header from '../header/Header'
import ShoppingTable from '../../containers/ShoppingTable/ShoppingTable'
import CreateItem from '../../containers/createItem/CreateItem';
import TotalPrice from '../../containers/TotalPrice'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Shopping List" />
        <div className="app_body">
          <div style={{display:'flex', flexDirection:'column'}}>
            <CreateItem />
            <TotalPrice/>
          </div>
          <div>
            <ShoppingTable />
          </div>
          
        </div>
        
      </div>
    );
  }
}

export default App;
