import classes from './maintypography.module.css'


const MainSection=(props)=>{
    return (
        <div className={classes.main_sec}>
            <div className={classes.mainSectionTypography}>
                <h1>Hi, I'm</h1>
                <h2 className={classes.big_heading}>Muthu Kumaran.</h2>
                <h3 className={classes.subTitle}>And I love making stuff!</h3>
                <p className={classes.typography}>I'm a developer based in India specializing in building exceptional webapps.</p>
                <a href="mailto: muthu101kumaran@gmail.com" className={classes.email_link} target="_blank" rel="noreferrer">Get In Touch</a>    
            </div>   
        </div>
    );
}

export default MainSection;