import classes from './projectContainer.module.css';

const ProjectContainer=({name,description,techologiesUsed,image,github,live,evenPosition})=>{
    return(
        <div className={classes["project-container"]}>
            {evenPosition?
                <>
                    <div className={classes["description"]}>
                    <h2 className={`${classes["heading"]} ${classes["even-heading"]}`}>{name}</h2>
                    <div className={classes["text-description"]}>
                        <p>{description}</p>
                        <h3>
                            Built with:
                        </h3>
                        <ul>
                            {
                                techologiesUsed.map(item=><li key={item+Math.random()}>
                                    {item}
                                </li>)
                            }
                        </ul>
                    </div>
                    <div className={`${classes["links-container"]} ${classes["even-links"]}`}>
                        <a href={github} target="_blank" rel="noreferrer" className={classes["links"]}>Go to Github</a>
                        <a href={live} target="_blank" rel="noreferrer" className={classes["links"]}>Live Site</a>
                    </div>
                    </div>
                    <img 
                        src={image}
                        alt="project"
                        className={classes["screenshot-desktop"]}/>
                </>
                :
                <>
                    <img 
                        src={image}
                        alt="project"
                        className={classes["screenshot-desktop"]}/>
                    <div className={classes["description"]}>
                        <h2 className={classes["heading"]}>{name}</h2>
                        <div className={classes["text-description"]} >
                            <p>{description}</p>
                            <h3>
                                Built with:
                            </h3>
                            <ul>
                            {
                                techologiesUsed.map(item=><li key={item+Math.random()}>
                                    {item}
                                </li>)
                            }
                            </ul>
                        </div>
                        <div className={classes["links-container"]}>
                        <a href={github} target="_blank" rel="noreferrer" className={classes["links"]}>Go to Github!</a>
                        <a href={live} target="_blank" rel="noreferrer"  className={classes["links"]}>Live Site</a>
                        </div>
                    </div>
                </>           
                }
            <div className={classes["mobile-description"]}>
                <h2 className={classes["heading"]}>{name}</h2>
                <img 
                    src={image}
                    alt="project"
                    className={classes["screenshot-mobile"]}/>
                <div className={classes["text-description"]}>
                    <p>{description}</p>
                    <h3>
                        Built with:
                    </h3>
                    <ul>
                        {
                            techologiesUsed.map(item=><li key={item+Math.random()}>
                                {item}
                            </li>)
                        }
                    </ul>
                </div>
                <div className={classes["links-container"]}>
                    <a href={github} target="_blank" rel="noreferrer" className={classes["links"]}>Go to Github!</a>
                    <a href={live} target="_blank" rel="noreferrer" className={classes["links"]}>Live Site</a>
                </div>
            </div>
            
        </div>
    )
}

export default ProjectContainer;