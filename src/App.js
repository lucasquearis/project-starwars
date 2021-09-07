import React from 'react';
import './App.css';
import Table from './components/Table';
import Input from './components/InputComponents/Input';
import Provider from './context/Provider';
import FilteredList from './components/FilteredList';
import Header from './components/Header';

function App() {
  return (
    <Provider>
      <Header />
      <Input />
      <FilteredList />
      <Table />
    </Provider>
  );
}

export default App;
