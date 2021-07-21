import style from './style.module.css';

const Button = ({children}) => {
    return (
        <button 
        // onClick={props.onClick}
        // type={props.type} 
        className={style.btn}
        ><span>{children}</span></button>
    ); 
};

export default Button;