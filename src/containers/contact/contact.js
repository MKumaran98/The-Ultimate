import classes from './contact.module.css';

const Contact=(props)=>{
    return(
        <div className={classes.contactContainer}>
            <h1 className={classes.banner}>
                Get In Touch
            </h1>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
        </div>
    )
}

export default Contact;