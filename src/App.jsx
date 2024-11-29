import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route properly
import './App.css';

import Read from './components/Read';
import Update from './components/Update';
import Create from './components/Create';

function App() {
  return (
    <>
      <div className="main">
        <h1>crededd</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/create" element={<Create />} />
            <Route path="/read" element={<Read />} />
            <Route path="/update" element={<Update />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
