import { Route, Routes,Link, useNavigate } from 'react-router-dom';
import './reset.css';
import './App.css';
import Main from './router/main/main';
import Login from './router/login/login';
import Nav from './components/nav/nav';

function App() {
  let navigate = useNavigate();

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
