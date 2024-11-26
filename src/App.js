// -40,000
// =========
// +34,775
// +35,200
// +35,500

// -25,000 to Dastgeer on 20-2-2024

// +35,600 to me 19-Feb

//141,000 total recieved 


// +53,250 ahmed ali qadir 13/02/24 

//total received 194,560 

// -20,000 Datgeer 14-12-23

// +28,560 to me 12-12-2023





import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'; // Replace with your store import
import ProductsList from './components/ProductsList';
import './index.css';


const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1 className="text-5xl font-bold underline">
          Hello world!
        </h1>
        <ProductsList />
      </div>
    </Provider>
  );
};

export default App;
