import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import './App.css'
import Search from './pages/Search';
import Favorites from './pages/Favorites';
import Match from './pages/Match';
import Layout from "./components/Layout";

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/match" element={<Match />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
