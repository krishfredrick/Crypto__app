import { BrowserRouter, Route, Routes} from "react-router-dom"
import './app.scss';
import Home from "./pages/Home";
import DashboardPage from './pages/dashboard'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route  path='/' element={ <Home/>  } />
            <Route  path='/dashboard' element={ <DashboardPage/>  } />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
