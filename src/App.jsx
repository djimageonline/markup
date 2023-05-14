import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <div>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Fun Fact about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originallhy created by Jordan Walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thoursands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}

export default App;
