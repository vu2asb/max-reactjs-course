import PostsList from './components/PostsList';
// Note in the code below <main></main> is a Root Element. We need atleast one wrapping root element
// even <></> will suffice.
// Also inside of return we need a self closing tag like <Post/> or include a closing tag like so <Post></Post> as shown below.
function App(){
  return (
    <main>
      <PostsList />
    </main>
    );
  };

  export default App;