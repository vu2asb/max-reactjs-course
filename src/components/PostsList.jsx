import Post from './Post';
import classes from './PostsList.module.css'

function PostsList () {
    return (
        <ul className={classes.posts}>
                <Post author="Ashok Singh" body="Ashok's post"/>
                <Post author="Asheesh Mathur" body="Asheesh's post"/>
        </ul>
    );
}

export default PostsList;