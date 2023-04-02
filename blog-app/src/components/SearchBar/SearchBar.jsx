import Styles from "./SearchBar.module.css";

const SearchBar = ({ formSubmit  ,handleSearchKey ,value ,clearSearch}) => {

  
  return (
    <div className={Styles.searchBar_wrap}>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          placeholder="Search By Category"
          value={value} /*value*/
          onChange={(e)=>handleSearchKey(e)}
        />
        {value && <span onClick={clearSearch}>x</span>}
        <button>Go</button> 
      </form>
    </div>
  );
};

export default SearchBar;
