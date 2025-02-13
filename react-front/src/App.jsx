import "./App.css";
import PostLists from "./components/PostLists";
function App() {
  return (
    <>
      <div className="app">
        <h1 className="mb-5 text-3xl text-sky-800 font-bold">React Frontend</h1>
        <p>Find this application layout in react-front/api/v1</p>
      </div>
      <PostLists />
    </>
  );
}

export default App;
