import React, {useState}from 'react';
import TodoDetails from './TodoDetails';

const TodoList = () => {
    const [task,setTask] = useState("");
    const [todos,setTodos]= useState([]);
    
    let changeHandler =(event)=>{
        setTask(event.target.value)
    }
    let submitHandler=(event)=>{
        event.preventDefault();
        const newTodos =[...todos,task];
        setTodos(newTodos);
        setTask("")
    }
    const deleteHandler =(indexvalue)=>{
        const newTodos= todos.filter ((todo,index)=> index !== indexvalue)
        setTodos(newTodos);

    }
  return <>
  <center> 
      <div className="card">
          <div className="card-body">
              <h3 className='card-title'>Todo Management </h3>
              <form onSubmit={submitHandler}>
                  <input type='text' name="task"  value={task} onChange={changeHandler}/> &nbsp;&nbsp; {/* //Adds one or many non-breaking space characters into your JSX. */}
                  <input type="Submit" value="Add" name='Add' />
              </form>
              <TodoDetails todoslist={todos} deleteHandler={deleteHandler}/>
          </div>
      </div>
  </center>
  
  </>;
};

export default TodoList;
