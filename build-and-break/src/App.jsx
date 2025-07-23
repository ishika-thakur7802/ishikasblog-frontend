import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import BlogPage from './pages/BlogPage.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ScreenLayout from "./components/ScreenLayout";



function App() {
    return (
        <Router>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} /> //path for frontend
                <Route path="/blog/:id" element={<BlogPage />} />
            </Routes>

            <Footer />
        </Router>
    );
}

export default App;

