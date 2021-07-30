import style from './style.module.css';

const Button = ({children}) => {
    return (
        <button className={style.btn}><span>{children}</span></button>
    ); 
};

export default Button;