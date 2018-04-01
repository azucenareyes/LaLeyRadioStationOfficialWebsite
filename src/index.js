import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase'

var config = {
  apiKey: "AIzaSyDrTmdlfbZONFn5vc-tRf145Tw2HScaIbg",
  authDomain: "bueno-f7bd0.firebaseapp.com",
  databaseURL: "https://bueno-f7bd0.firebaseio.com",
  projectId: "bueno-f7bd0",
  storageBucket: "bueno-f7bd0.appspot.com",
  messagingSenderId: "901217453963"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
