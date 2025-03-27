import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import RecommendationForm from './pages/RecommendationForm';
import About from './pages/About';
import Allcows from './pages/Allcows';
import Main from './pages/Main';
import 'react-toastify/dist/ReactToastify.css';
import CompatibilityTest from './pages/Compatiblity';
import News from './pages/News';
import Info from './pages/Info';
import CompatibilityDetails from './pages/CompatiblityDtails';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<RecommendationForm />} />
            <Route path="/about" element={<About />} />
            <Route path="/allcows" element={<Allcows />} />
            <Route path="/Main/:cowId" element={<Main />} />
            <Route path="/compatability" element={<CompatibilityTest />} />
            <Route path="/compatibility-details/:cowId/:bullId" element={<CompatibilityDetails/>} />
            <Route path='/news' element={<News />} />
            <Route path="/info" element={<Info />} />

          </Routes>
        </main>
        <Footer />
        <ToastContainer position="bottom-right" />
      </div>
    </Router>
  );
}

export default App;