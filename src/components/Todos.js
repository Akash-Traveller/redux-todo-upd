import React from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { Icon } from 'react-icons-kit';
import {trash} from 'react-icons-kit/feather/trash'
import {edit2} from 'react-icons-kit/feather/edit2';
import { handleCheckBox, removeTodo } from '../redux/todofunct/actions/actions';

const Todos = ({editFormVisiblelity , handleEditClick}) => {
  const todos = useSelector((state)=>state.operationsReducer);
  const dispatch = useDispatch();
  console.log(todos)
  return todos.map((todo)=>(
    <div key={todo.id} className='todo-box'>
        <div className='content'>
          {editFormVisiblelity===false && (
             <input type="checkbox" checked={todo.completed} onChange={() => dispatch(handleCheckBox(todo.id))}></input>
          )}
           
            <p style={todo.completed===true?{textDecoration:'line-through'}:{textDecoration:'none'}}>
                {todo.todo}
            </p>
        </div>
        <div className='actions-box'>
          {editFormVisiblelity===false && (
            <>
            <span onClick={() => handleEditClick(todo)}><Icon icon={edit2}/></span>
            <span onClick={() => dispatch(removeTodo(todo.id))}><Icon icon={trash}/></span>
            </>
          )}
        </div>
    </div>
  ))
}

export default Todos