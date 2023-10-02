import {Route, Routes} from 'react-router-dom';
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/register" exact element={<Register/>}/>
        <Route path="/login" exact element={<Login/>}/>
        <Route path="/profile/:id" exact element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
