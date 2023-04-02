import Styles from "./BlogItem.module.css";
import Chip from "../../../common/Chip/Chip";
import {Link} from 'react-router-dom';
import author from '../../../images/author.jpg'

const BlogItem = ({
  blog: { 
    id, 
    authorName, 
    title, 
    url, 
    body, 
    category, 
    createdAt },
}) => {
  return (
    <div className={Styles.blogItem_wrap}>
      <img src={url} alt="cover" className={Styles.blogItem_cover} />
      <Chip lable={category} />
      <h3>{title}</h3>
      <p className={Styles.blogItem_desc}>{body}</p>

      <footer>
        <div className={Styles.blogItem_author}>
          <img src={author} alt="avatar" />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className={Styles.blogItem_link} to ={`/blog/${id}`} > → </Link>
      </footer>
    </div>
  );
};

export default BlogItem;
