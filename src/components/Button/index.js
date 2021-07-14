import style from './style.module.css';

const SearchButton = () => {
    return (
        <button type="submit" className={style.btn}><span>Search</span></button>
    ); 
};

export default SearchButton;