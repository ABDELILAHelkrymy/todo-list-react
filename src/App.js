import {useState, useEffect} from 'react'
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [textInput, setTextInput] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('All')
  const [filtredTodos, setFiltredTodos] = useState([])
  useEffect(()=>{
    filterHandler();
  },[todos,status])

  const filterHandler = () => {
    switch (status) {
      case "completed": 
        setFiltredTodos(todos.filter((todo) => todo.completed === true));
      break;
      case "uncompleted":
        setFiltredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default :
        setFiltredTodos(todos);
        break;
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Ed's Todo List </h1>
      </header>
      
      <Form 
        todos={todos} 
        setTodos={setTodos} 
        textInput={textInput} 
        setTextInput={setTextInput}
        setStatus={setStatus}
        />
      <TodoList filtredTodos={filtredTodos} setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
