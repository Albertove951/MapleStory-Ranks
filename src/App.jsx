import React from 'react';
import './App.css';
import DataComponent from './DataComponent'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: []
    }
  }
  render() {
   return (
     <div>
       <DataComponent />
     </div>
   )
 }
}

export default App;
