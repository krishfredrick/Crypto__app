import { BrowserRouter, Route, Routes} from "react-router-dom"
import './app.scss';
import Home from "./pages/Home";
import DashboardPage from './pages/dashboard'
import CoinPage from "./pages/CoinPage";
import ComparePage from "./pages/Compare";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route  path='/' element={ <Home/>  } />
            <Route  path='/dashboard' element={ <DashboardPage/>  } />
            <Route  path='/coin/:id' element={ <CoinPage/>  } />
            <Route  path='/compare' element={ <ComparePage/>  } />

          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
