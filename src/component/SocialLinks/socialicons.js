import classes from './socialicons.module.css';
import github from './icons/github.svg';
import twitter from './icons/twitter.svg';
import instagram from './icons/instagram.svg';
import codesand from './icons/codesandbox.svg';
import linkd from './icons/linkedin.svg';



const Socialicons=(props)=>{
  return (
    <div >
      
    <ul className={classes.iList}>
        <li className={classes.icon}>
            <img src={github} alt=""/>
            </li>

            <li className={classes.icon}>
            <img src={twitter} alt=""/>
            </li>

            <li className={classes.icon}>
            <img src={instagram} alt=""/>
            </li>

            <li className={classes.icon}>
            <img src={codesand} alt=""/>
            </li>

            <li className={classes.icon}>
            <img src={linkd} alt=""/>
            </li>
    </ul>
    
  </div>
  );
}

export default Socialicons;
