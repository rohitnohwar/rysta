import Login from './Components/Login.js'
import Thanks from './Components/Thanks.js'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
<Router>
  <div>
  <Routes>
    <Route path="/" exact element={<Login />} />
    <Route path="/thanks" exact element={<Thanks />} />
  </Routes>
  </div>
  </Router>
  );
}

export default App;
