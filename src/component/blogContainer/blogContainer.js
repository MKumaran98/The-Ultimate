import classes from './blogContainer.module.css'

const blogContainer=({name,image,description,link})=>{
    return(
        <div className={classes.card}>
                <div className={classes.cardImg}>
                    <img className={classes.cardimage} src={image} alt="blog-img"/>
                </div>
                <div className={classes.cardContent}>
                    <div className={classes.cardTitle}>
                    <h4 className={classes.greytxt}>{name}</h4>
                    </div>
                    <div className={classes.cardText}>
                    <p>{description}</p>
                    </div>
                    <div className={classes.blogiconcontainer}>
                        <a href={link} className={classes.readMoreText}>
                            Read More
                        </a>
                    </div>
                </div>
            </div>
    )
}

export default blogContainer;