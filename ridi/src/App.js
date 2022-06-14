import { Route, Routes,Link, useNavigate } from 'react-router-dom';
import './reset.css';
import './App.css';
import Main from './router/main/main';
import Login from './router/login/login';
import Nav from './components/nav/nav';
import Join from './router/join/join';
import Joindetail from './router/joindetail/joindetail';

function App() {
  let navigate = useNavigate();

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/join' element={<Join></Join>}></Route>
        <Route path='/joindetail' element={<Joindetail></Joindetail>}></Route>
      </Routes>
    </div>
  );
}

export default App;
