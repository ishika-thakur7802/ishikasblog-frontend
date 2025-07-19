import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import './blog.css';


function BlogPage() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        fetch(`https://ishikasblogg-production-efcd.up.railway.app/api/blogs/${id}`)
            .then(res => res.json())
            .then(data =>{
                console.log(typeof data.content);
                console.log("Fetched blog:", data); // DEBUG
                console.log("Blog content:", data.content);
                setBlog(data)});
    }, [id]);

    if (!blog) return <p>Loading...</p>;


    return (
        <article className="blog-post-container">
            <h1>{blog.title}</h1>
            <img src={blog.imageUrl} alt={blog.title} className="blog-img" />
            const parsedContent = blog.content.replace(/\\n/g, '\n');
            {blog?.content && (
              <ReactMarkdown
                className="blog-markdown"
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
              >
                console.log("Snippet:", blog.content.slice(0, 50));

                {blog.content}
              </ReactMarkdown>
            )}


        </article>
    );
}

export default BlogPage;
