import logo from './logo.svg';
import './App.css';
import {Landing} from "./views/Landing";
import {PrincipalView} from "./views/PrincipalView";
import {AppRouter} from "./router/AppRouter";
function App() {
  return (
    <div className="App">
      <AppRouter/>
    </div>
  );
}

export default App;
