import Login from "./views/Login";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
