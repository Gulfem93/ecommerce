function BlogCard({ post }) {
  return (
    <div className="blog-card">
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
  );
}

export default BlogCard;
