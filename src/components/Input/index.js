import style from './style.module.css';

const index = (props) => {
  return(
    <input
      value={props.value}
      onChange={props.onChange}
      type={props.type}
      name={props.name} 
      style={style.input} 
      placeholder={props.placeholder}/>
  );
};

export default index;