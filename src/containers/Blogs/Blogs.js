import classes from './Blog.module.css';
import BlogContainer from '../../component/blogContainer/blogContainer';
import SectionHeading from '../../component/sectionHeading/sectionHeading';
import {BlogData} from './BlogsData'

const blogContainer=()=>{
    return(
        <div className={classes.blogContainer}>
            <SectionHeading>My Blogs</SectionHeading>
            <div className={classes.cards}>
                {
                    BlogData.map(({name,image,description,link},index)=>(
                        <BlogContainer
                            key={index}
                            name={name}
                            image={image}
                            description={description}
                            link={link}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default blogContainer;