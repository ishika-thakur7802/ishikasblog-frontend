import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";

function BlogPage() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        fetch(`https://ishikasblogg-production-efcd.up.railway.app/api/blogs/${id}`)
            .then(res => res.json())
            .then(data =>{
                console.log("Fetched blog:", data); // DEBUG
                setBlog(data)});
    }, [id]);

    if (!blog) return <p>Loading...</p>;
    console

    return (
        <article className="prose lg:prose-xl max-w-none text-white dark:text-white">
            <h1>{blog.title}</h1>
            <img src={blog.imageUrl} alt={blog.title} className="blog-img" />
             <ReactMarkdown remarkPlugins={[remarkGfm]}>{blog.content}</ReactMarkdown>

        </article>
    );
}

export default BlogPage;
