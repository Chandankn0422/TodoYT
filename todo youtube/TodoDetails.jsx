import React from 'react';

const TodoDetails = ({todoslist, deleteHandler}) => {
  return <div>
      {todoslist.map((todo,index)=>
      <div key={index}>
          <h5>{todo} &nbsp; <button onClick={()=> deleteHandler(index)} className="btn btn-danger">Delete</button></h5>
          

      </div>)}
  </div>;
};

export default TodoDetails;
