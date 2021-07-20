import style from './style.module.css';

const SearchButton = (props) => {
    return (
        <button 
        onClick={props.onClick}
        type={props.type} 
        className={style.btn}
        ><span>Search</span></button>
    ); 
};

export default SearchButton;