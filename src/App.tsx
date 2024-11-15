import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Header from './components/Header';
import { VoucherProvider } from './contexts/VoucherContext';
import './App.css'

function App() {
  return (
    <VoucherProvider>
      <Router>
        <Header />
        <div className="pagesContainer">
          <h1>Voucher Purchase</h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
      </Router>
    </VoucherProvider>
  );
}

export default App;