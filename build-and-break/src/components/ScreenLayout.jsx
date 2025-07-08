import React from "react";
import { Link } from "react-router-dom";
import "../theme.css";
import ThemeToggle from "./ThemeToggle"; // ✅ Import the toggle component

const ScreenLayout = ({ blogs }) => {
    return (
        <div className="screen-frame">
            <div className="screen-header">
                {/* Left side: buttons */}
                <div style={{ display: "flex" }}>
                    <div className="button close"></div>
                    <div className="button minimize"></div>
                    <div className="button maximize"></div>
                </div>

                {/* Right side: theme toggle button */}
                <ThemeToggle />
            </div>

            <div className="screen-content">
                <section className="hero">
                    <h1 className="page-title">Build and Break</h1>
                    <p className="tagline">Hi, I'm Ishika — I debug life and code one log at a time.</p>
                </section>

                <h2 className="subtitle">Latest logs</h2>

                <div className="blog-grid">
                    {blogs.map((blog) => (
                        <div className="blog-card" key={blog.id}>
                            <pre className="blog-intro">$ open blog --id={blog.id}</pre>
                            <h3>{blog.title}</h3>
                            <p>{blog.content.slice(0, 100)}...</p>
                            <Link to={`/blog/${blog.id}`}>Read more →</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ScreenLayout;
