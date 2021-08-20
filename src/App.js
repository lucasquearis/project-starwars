import React from 'react';
import './App.css';
import Table from './components/Table';
import Input from './components/Input';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Input />
      <Table />
    </Provider>
  );
}

export default App;
