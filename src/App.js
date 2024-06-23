import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Store from './todolist/Store';
import Router from './todolist/Router';

function App() {
  return (
    <div className="">
      <Provider store={Store}>
           <Router/> 
      </Provider>
    </div>
  );
}

export default App;
