import './App.css';
import Home from './component/Home';
import { Route, Routes } from 'react-router-dom';
import SignIn from './component/SignIn';

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/SignIn' element={<SignIn />}></Route>
      </Routes>
    </div>
  );
}
export default App;