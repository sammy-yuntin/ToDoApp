import React  from "react";
import Todo from "./components/Todo";


function App() {
  return (
    <div className="App">
      <h1>MY Todos</h1>
      <Todo text="Learn React"/> 
      <Todo text="Be a master Of React"/> 
      <Todo text="Do not disappoint on project"/> 
      
    </div>
  );
}

export default App;
 