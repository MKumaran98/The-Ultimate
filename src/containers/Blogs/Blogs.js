import classes from './Blog.module.css';
import BlogContainer from '../../component/blogContainer/blogContainer';
import SectionHeading from '../../component/sectionHeading/sectionHeading';

const blogContainer=(props)=>{
    return(
        <div className={classes.blogContainer}>
            <SectionHeading>My Blogs</SectionHeading>
            <div className={classes.cards}>
                <BlogContainer/>
                
            </div>
        </div>
    )
}

export default blogContainer;