import classes from './blogContainer.module.css'

const blogContainer=(props)=>{
    return(
        <div className={classes.card}>
                <div className={classes.cardImg}>
                    <img className={classes.cardimage} src="https://unsplash.it/800/600?image=59" alt="blog-img"/>
                </div>
                <div className={classes.cardContent}>
                    <div className={classes.cardTitle}>
                    <h4 className={classes.greytxt}>Time to Have More Fun</h4>
                    </div>
                    <div className={classes.cardText}>
                    <p>A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS </p>
                    </div>
                    <div className={classes.blogiconcontainer}>
                        <span className={classes.readMoreText}>
                            Read More
                        </span>
                    </div>
                </div>
            </div>
    )
}

export default blogContainer;