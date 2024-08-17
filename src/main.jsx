import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom';
import App from './app.jsx';
import './index.css';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Navbar />
      <App />
      <Footer />
    </Router>
  </StrictMode>
);
