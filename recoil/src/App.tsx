import React from 'react';
import './App.css';
import TextInput from "./component/TextInput";
import CharacterCounter from "./component/CharacterCounter";
import SelectorTest from "./component/SelectorTest";


function App() {


  return (
    <div className="App">
      <TextInput></TextInput>
      <CharacterCounter></CharacterCounter>
      {/*  <TodoList></TodoList>*/}
        <hr/>
        <SelectorTest/>
    </div>
  );
}

export default App;
