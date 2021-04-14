import classes from './socialicons.module.css';
import github from './icons/github.svg';
import codesand from './icons/codesandbox.svg';
import linkd from './icons/linkedin.svg';
import email from './icons/email.svg'


const Socialicons=(props)=>{
  return (
    <div >
      
    <ul className={classes.iList}>
        <li className={classes.icon}>
          <a href="https://github.com/KumaranSahi" target="_blank" rel="noreferrer">
            <img src={github} alt=""/>
          </a>
        </li>

        <li className={classes.icon}>
          <a href="https://codesandbox.io/u/KumaranSahi" target="_blank" rel="noreferrer">
            <img src={codesand} alt=""/>
          </a>
        </li>

        <li className={classes.icon}>
          <a href="https://www.linkedin.com/in/muthu-kumaran-760735184/" target="_blank" rel="noreferrer">
            <img src={linkd} alt=""/>
          </a>
        </li>
        <li>
          <a href="mailto: muthu101kumaran@gmail.com" className={classes.email_link} target="_blank" rel="noreferrer">
            <img src={email} alt=""/>
          </a>
        </li>
    </ul>
    
  </div>
  );
}

export default Socialicons;
