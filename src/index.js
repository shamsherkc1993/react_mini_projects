import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import jsonDetail from './components/FakeJson';
import itemDetails from './components/ItemDetails';

const AllFakeData = createContext();
const HomeFakeData = createContext();

const allData = jsonDetail;
const allHomeItems = itemDetails;



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AllFakeData.Provider value={allData}>
    <HomeFakeData.Provider value={allHomeItems}>
      <App />
    </HomeFakeData.Provider>
  </AllFakeData.Provider>
);

export {AllFakeData, HomeFakeData};
