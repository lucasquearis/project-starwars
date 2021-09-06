import React from 'react';
import './App.css';
import Table from './components/Table';
import Input from './components/Input';
import Provider from './context/Provider';
import FilteredList from './components/FilteredList';

function App() {
  return (
    <Provider>
      <Input />
      <FilteredList />
      <Table />
    </Provider>
  );
}

export default App;
