import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import AddSalesEntry from './pages/AddSalesEntry';
import TotalRevenue from './pages/TotalRevenue';
import TopSales from './pages/TopSales';
import NavBar from './component/NavBar';

function App() {
  return (
    <div>
    <BrowserRouter>
       <NavBar/>
       <Routes>
       <Route exact path='/' element={<Login/>}/>
       <Route exact path='/addsalesentry' element={<AddSalesEntry/>}/>
       <Route exact path='/topsales' element={<TopSales/>}/>
       <Route exact path='/totalrevenue' element={<TotalRevenue/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/register' element={<Register/>}/>
        
       </Routes>
    </BrowserRouter>
     
    </div>
  )
}

export default App;
