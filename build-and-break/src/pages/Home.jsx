import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';
import '../theme.css';
import ScreenLayout from '../components/ScreenLayout.jsx';

function Home() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://ishikasblogg-production-efcd.up.railway.app/api/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);

    return (
            <ScreenLayout blogs={blogs} />
    );
}

export default Home;