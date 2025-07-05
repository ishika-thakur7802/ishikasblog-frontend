import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog/:id" element={<BlogPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;