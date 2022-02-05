import React from 'react';
import Info from './Components/Info';
import './App.css';
import Counter from './Components/Counter'
import Image from './Components/Image'

class App extends React.Component{
  render() {
    return (
      <div>
        <Info nama='Patrick' kelas='XI MIPA 1' isMorning='pagi' />
        <Counter/>

      </div>
    );
  }
}

export default App;
