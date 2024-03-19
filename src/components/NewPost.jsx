import {useState} from 'react'; // react hook
import classes from './NewPost.module.css';

// Note: The hook has to be executed within the component as shown below.
// This registers a new state value that belongs to this component.
// The useState function returns an array of exactly two elements.
// The first one is the current state value which is an empty string useState('') 
// and the second one is a state updating function.
// This will cause react to run the NewPost() function on every "change".
function NewPost() {
    const [enteredBody, setEnteredBody] = useState(''); 
    function changeBodyHandler(event){
    setEnteredBody(event.target.value);
    }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler}/>
      </p>
      <p id="textShown">{enteredBody}</p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;