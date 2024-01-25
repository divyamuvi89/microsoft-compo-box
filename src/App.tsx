import React from 'react';
import logo from './logo.svg';
import './App.css';
import FruitSelectionComboBox from './FruitSelection';
import SimplifiedFruitSelection from './SimplifiedFruit';
import DataFetcher from './FetchData';
import MyCounter from './Counter';

const App:React.FC = () => {
  return (
    <div className="App">
      <FruitSelectionComboBox   />
      <DataFetcher />
      <SimplifiedFruitSelection />

      <MyCounter />

    
    </div>
  );
}

export default App;
