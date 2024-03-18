import Post from './Post';
import NewPost from './NewPost';
import classes from './PostsList.module.css';

function PostsList () {
    return (
        <>
        <NewPost/>
        <ul className={classes.posts}>
            <Post author="Ashok Singh" body="Ashok's post"/>
            <Post author="Asheesh Mathur" body="Asheesh's post"/>
        </ul>   
        </>

    );
}

export default PostsList;