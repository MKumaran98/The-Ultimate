import classes from './Blog.module.css';
import BlogContainer from '../../component/blogContainer/blogContainer';
import SectionHeading from '../../component/sectionHeading/sectionHeading';
import {BlogData} from './BlogsData'

const blogContainer=()=>{
    return(
        <div className={classes["blog-container"]}>
            <SectionHeading>My Blogs</SectionHeading>
            <ul className={classes["cards"]}>
                {
                    BlogData.map(({image,name,description,link},index)=>(
                        <li key={index}>
                            <BlogContainer
                                image={image}
                                name={name}
                                description={description}
                                link={link}
                            />
                        </li>
                    ))
                }                
            </ul>
        </div>
    )
}

export default blogContainer;