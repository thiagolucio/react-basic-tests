import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import TopMenu from './components/TopMenu/TopMenu';
import Footer from './components/Footer/Footer';

import Home from './pages/Home';
import Listagens from './pages/Listagens';

function App() {

  return (
    <BrowserRouter>
      <TopMenu/>
      <div className="container_index">
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="listagens" element={<Listagens />} />
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter >
  );
}

export default App;
