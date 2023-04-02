import Styles from "./Home.module.css";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import BlogList from "../../components/BlogList/BlogList";
import bloglist from "../../config/data";
import { useState } from "react";
import EmptyList from "../../common/EmptyList/EmptyList";
const Home = () => {
  const [blogs, setBlogs] = useState(bloglist);
  // const [newBlogs, setNewBlogs] = useState();
  const [searchKey, setSearchKey] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    handleSearchSubmit(searchKey);
  };

  // ---------- fetch search key --------
  const handleSearchKey = (e) => {
    setSearchKey(e.target.value);
  };

// ----------  handle search  --------
  const handleSearchSubmit = (searchKey) => {
    const allBlogs = bloglist;
    const result = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(result);
  };

  // ------- clear search -----------
  const handleClearSearch = () => {
    setBlogs(bloglist);
    setSearchKey("");
  };

  return (
    <div className={Styles.home_container}>
      {/* page header  */}
      <Header />
      {/* Search Bar  */}
      <SearchBar
        clearSearch={handleClearSearch}
        value={searchKey}
        formSubmit={formSubmit}
        handleSearchKey={handleSearchKey}
      />

      {/* Blog List & Empty List  */}  
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
