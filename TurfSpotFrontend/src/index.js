import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './Components/Frontpages/frontPage.css';
import store from './Redux/Store/Store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Frontpages/Footer';
// import 'mdbreact/dist/css/mdb.css';

ReactDOM.render(
  
  <React.StrictMode>
    <Provider store={store}>
    <App />
    <Footer/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
