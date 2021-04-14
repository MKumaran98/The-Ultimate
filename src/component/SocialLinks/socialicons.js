import classes from './socialicons.module.css';
import github from './icons/github.svg';
import codesand from './icons/codesandbox.svg';
import linkd from './icons/linkedin.svg';
import email from './icons/email.svg'


const Socialicons=()=>{
  return (
    <div >
      
    <ul className={classes["social-icon-list"]}>
        <li className={classes["icon"]}>
          <a href="https://github.com/KumaranSahi" target="_blank" rel="noreferrer">
            <img src={github} alt="github"/>
          </a>
        </li>

        <li className={classes["icon"]}>
          <a href="https://codesandbox.io/u/KumaranSahi" target="_blank" rel="noreferrer">
            <img src={codesand} alt="codesandbox"/>
          </a>
        </li>

        <li className={classes["icon"]}>
          <a href="https://www.linkedin.com/in/muthu-kumaran-760735184/" target="_blank" rel="noreferrer">
            <img src={linkd} alt="linkedin"/>
          </a>
        </li>
        <li className={classes["icon"]}>
          <a href="mailto: muthu101kumaran@gmail.com" target="_blank" rel="noreferrer">
            <img src={email} alt="email"/>
          </a>
        </li>
    </ul>
    
  </div>
  );
}

export default Socialicons;
