import './App.css';
import Home from './component/Home';
import { Route, Routes } from 'react-router-dom';
import SignIn from './component/SignIn';
// import CurveLine from './component/CurveLine';
import Trendings from './component/Trendings';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/SignIn' element={<SignIn />}></Route>
      </Routes>
      {/* <CurveLine></CurveLine> */}
      <Trendings></Trendings>
    </div>
  );
}
export default App;