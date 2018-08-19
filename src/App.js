import React from 'react';
// import ReactDOM from 'react-dom';

import data from './dummy_data.js';
import TransactionList from './components/TransactionList.jsx';

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to Budget Brief</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

const App = () => (
  <div>
    <h1>Budget Brief</h1>
    <div className="app">
      <TransactionList />

      <div className="category">
        <h3>Budget Categories</h3>
        <div className="category-list">
          <div className="category-data">Food</div>
          <div className="category-data">Entertainment</div>
          <div className="category-data">Transportation</div>
          <div className="category-data">Rent</div>
          <div className="category-data">Bills</div>
        </div>
          <div className="category-form">
            <div className="category-input">
            <input
              type="text"
              placeholder="Budget Category"
            />
            <input
              type="number"
              placeholder="Target Budget"
            />
            </div>
            <button>Add</button>
          </div>
      </div>
    </div>
  </div>
);

export default App;
