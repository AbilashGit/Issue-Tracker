import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import configureStore from './capstone/store/configureStore';
import MyApp2 from './capstone/MyApp2';

function App() {
  return (
    <Provider store={configureStore}>
      <div className="App">
        <MyApp2></MyApp2>
      </div>
    </Provider>
  );
}

export default App;
