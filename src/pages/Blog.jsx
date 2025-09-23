import React from "react";
import "../pages/css/blog.css";
import image1 from "./image/blog_image1.jpg";
import image2 from "./image/blog_image2.jpg";
import image3 from "./image/blog_image3.jpg";
import image4 from "./image/blog_image4.jpg";
import image5 from "./image/blog_image5.jpg";
import image6 from "./image/blog_image6.jpg";
import { FcNext } from "react-icons/fc";
import { FcAlarmClock } from "react-icons/fc";
import { FaChartArea } from "react-icons/fa";

// Blog yazıları verisi
const blogPosts = [
    {
        id: 1,
        tag: "NEW",
        img: image1,
        title: "Koudetat à la Maison #1 (L'intégrale)",
        description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: "22 April 2021",
        comments: "10 comments",
        tags: ["Google", "Trending", "New"]
    },
    {
        id: 2,
        tag: "NEW",
        img: image2,
        title: "Koudetat à la Maison #1 (L'intégrale)",
        description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: "22 April 2021",
        comments: "10 comments",
        tags: ["Google", "Trending", "New"]
    },
    {
        id: 3,
        tag: "NEW",
        img: image3,
        title: "Koudetat à la Maison #1 (L'intégrale)",
        description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: "22 April 2021",
        comments: "10 comments",
        tags: ["Google", "Trending", "New"]
    },
    {
        id: 4,
        tag: "NEW",
        img: image4,
        title: "Koudetat à la Maison #1 (L'intégrale)",
        description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: "22 April 2021",
        comments: "10 comments",
        tags: ["Google", "Trending", "New"]
    },
    {
        id: 5,
        tag: "NEW",
        img: image5,
        title: "Koudetat à la Maison #1 (L'intégrale)",
        description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: "22 April 2021",
        comments: "10 comments",
        tags: ["Google", "Trending", "New"]
    },
    {
        id: 6,
        tag: "NEW",
        img: image6,
        title: "Koudetat à la Maison #1 (L'intégrale)",
        description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: "22 April 2021",
        comments: "10 comments",
        tags: ["Google", "Trending", "New"]
    }
];

function Blog() {
    return (
        <div className="blog-container">
            {blogPosts.map((post) => (
                <div key={post.id} className="blog-card">
                    <div className="fixed-height">
                        <div className="tag">{post.tag}</div>
                        <img src={post.img} alt={post.title} />
                    </div>
                    <div className="Frame3">
                        <div className="tags">
                            {post.tags.map((tag, index) => (
                                <span key={index} className={`tags-small tags-small-${tag.toLowerCase()}`}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h4 className="post-title">{post.title}</h4>

                        <p className="post-description">{post.description}</p>
                        <div className="Frame1">
                            <div className="Frame1-date">
                                <div className="alarmClock"><FcAlarmClock /></div>

                                <span className="small">{post.date}</span>
                            </div>
                            <div className="Frame1-comment">
                                <div className="chartArea"><FaChartArea style={{ color: 'green'}} /></div>
                                <span className="small">{post.comments}</span>
                            </div>
                        </div>
                        <div className="a">
                            <h6>Learn More</h6>
                            <div className="icon arrow-next"><FcNext /></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Blog;
