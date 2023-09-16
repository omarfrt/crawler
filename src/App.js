import GlobalStyles from "./global/reset";
import "./App.css";
import CategoryPage from "./pages/category";
import { PopUp } from "./components/popup";
import {
  BrowserRouter as Router,
 Routes,
  Route,
  redirect
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Router>
        <Routes>
        
          <Route element={<CategoryPage/>} path="/:category"/>
          <Route path="/" element={<PopUp/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
