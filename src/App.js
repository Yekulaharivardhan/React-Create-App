import './App.css';
import HomePage from './Components/HomePage';
import NavigationBar from './ReusableComponents/NavigationBar';

function App() {
  return (
    <div className="App">
       <NavigationBar/>
       <HomePage/>
    </div>
  );
}

export default App;
