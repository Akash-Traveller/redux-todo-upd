import React , { useState } from 'react'
import Form from './components/Form'
import Todos from './components/Todos'
import { useDispatch , useSelector } from 'react-redux'
import { deleteAll } from './redux/todofunct/actions/actions'

const App = () => {

  const dispatch = useDispatch();
  const todosDelete = useSelector((state)=>state.operationsReducer);
  const [editFormVisiblelity , setEditFormVisiblelity ] = useState(false);
  const [editTodo , setEditTodo ] = useState('');

  const handleEditClick = (todo) => {
    setEditFormVisiblelity(true);
    setEditTodo(todo);
  }

  const cancelUpdate = () => {
    setEditFormVisiblelity(false)
  }

  return (
    <div className='wrapper'>
      <br></br>
      <h1 className='text-center'> Redux Todo  App </h1>
      <Form editFormVisiblelity={editFormVisiblelity} editTodo={editTodo} cancelUpdate={cancelUpdate}/>
      <Todos handleEditClick={handleEditClick} editFormVisiblelity={editFormVisiblelity}/>
      {todosDelete.length > 0 && (
        <button className='btn btn-danger btn-md delete-all' onClick={()=>dispatch(deleteAll())}>DELETE ALL</button>
      )}
    </div>
  )
}

// Updated code for create & read data only

export default App