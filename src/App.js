import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import './assets/reset.css';
import Header from './components/shared/Header';
import CardDetails from './components/mini/CardDetails';

const App = () => (
  <div className="App">
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  </div>
);

export default App;
