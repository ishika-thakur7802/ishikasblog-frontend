import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';
import '../theme.css';

function Home() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://your-backend.onrender.com/api/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);

    return (
        <main className="home">
            <section className="hero">
                <h1 className="page-title"> Build and Break</h1>
                <p className="tagline">hi, I'm Ishika — I debug life and code one log at a time.</p>
            </section>
            <h2 className="subtitle">Latest logs</h2>
            <div className="blog-grid">
                {blogs.map(blog => (
                    <div className="blog-card" key={blog.id}>
                        <pre className="blog-intro">$ open blog --id={blog.id}</pre>
                        <h3>{blog.title}</h3>
                        <p>{blog.content.slice(0, 100)}...</p>
                        <Link to={`/blog/${blog.id}`}>Read more →</Link>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Home;