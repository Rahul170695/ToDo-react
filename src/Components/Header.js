//import Card from '../UI/Card';
import classes from './Header.module.css';
import image from '../Assets/TODO-image.jpg';

const Header = () => {
    return (
      // <div className={classes.heading} >
      //   <h1 className={classes.content} >TODO</h1>
      // </div>
      <>
      <img src={image} alt="TODO" className={classes.image} />
        <h1 className={classes.title} >TODO</h1>
        </>
    );
  }
  
  export default Header;
  