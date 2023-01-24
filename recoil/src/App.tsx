import React from 'react';
import './App.css';
import TextInput from "./component/TextInput";
import CharacterCounter from "./component/CharacterCounter";
import TodoList from "./component/todo/TodoList";



function App() {
  return (
    <div className="App">
      {/*<TextInput></TextInput>*/}
      {/*<CharacterCounter></CharacterCounter>*/}
        <TodoList></TodoList>
    </div>
  );
}

export default App;
