import Login from "./views/Login";
import Signup from "./views/Signup";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route index path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
