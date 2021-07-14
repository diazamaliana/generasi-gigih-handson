import style from './style.module.css';

const index = () => {
  return(
    <input type="text" style={style.input} placeholder="Search here..."/>
  );
};

export default index;