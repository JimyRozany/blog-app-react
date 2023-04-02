import Styles from "./BlogList.module.css";
import BlogItem from "./BlogItem/BlogItem";
const BlogList = ({ blogs }) => {
  return (
    <div className={Styles.blogList_wrap}>
      {blogs.map((blog) => (
        <BlogItem blog={blog} key={blog.id} />
      ))}
    </div>
  );
};

export default BlogList;
