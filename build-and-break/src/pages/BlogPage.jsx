import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function BlogPage() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        fetch(`https://your-backend.onrender.com/api/blogs/${id}`)
            .then(res => res.json())
            .then(data => setBlog(data));
    }, [id]);

    if (!blog) return <p>Loading...</p>;

    return (
        <article className="blog-post">
            <h1>{blog.title}</h1>
            <img src={blog.imageUrl} alt={blog.title} className="blog-img" />
            <p>{blog.content}</p>
        </article>
    );
}

export default BlogPage;
