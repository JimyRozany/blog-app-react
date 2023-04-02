import Styles from "./Blog.module.css";
import { useState ,useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import blogList from "../../config/data";
import Chip from "../../common/Chip/Chip";
import EmptyList from "../../common/EmptyList/EmptyList";

const Blog = () => {
  const {id} = useParams();
  const [blog ,setBlog] = useState(null);

  useEffect(() => {

    let blog = blogList.find(blog => blog.id === parseInt(id) );
   
    // blog ? setBlog(blog) : '' 
    if(blog){
      setBlog(blog);
    }

  }, [id]) ;
  return (
    <div>
      <Link to='/' className={Styles.blog_goBack}>
        <span className={Styles.blog_goBack_arrow}>&#8592; </span>
        Go Back
      </Link>
      {(blog) ? (<div className={Styles.blog_wrap}>
                  <header>
                    <p className={Styles.blog_date}>Published {blog.createdAt}</p>
                    <h1>{blog.title}</h1>
                    <div className={Styles.blog_category}>
                      <Chip lable={blog.category}/>
                    </div>
                  </header>
                  <img src={blog.url} alt="cover" />
                  <p className={Styles.blog_desc}>{blog.body}</p>
          
                </div>) : (
                <EmptyList />
                )
      }
    </div>
  );
};

export default Blog;
